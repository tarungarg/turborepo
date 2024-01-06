import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { gql } from 'graphql-tag'
import { PrismaClient } from '@prisma/client'
import { prisma } from '@myshop/core'

type Context = {
  prisma: PrismaClient
}
const resolvers = {
  User: {
    posts: (user: any) => {
      return prisma.post.findMany({
        where: {
          userId: user.id,
        },
      })
    },
  },
  Post: {
    user: (post: any) => {
      return prisma.user.findUnique({
        where: {
          id: post.userId,
        },
      })
    },
  },
  Query: {
    getUsers: async (parant: any, args: any, context: Context) => {
      return await prisma.user.findMany()
    },
    getPosts: async (parant: any, args: any, context: Context) => {
      return await prisma.post.findMany()
    },
    getUserByEmail: async (parant: any, args: any, context: Context) => {
      return await prisma.user.findUnique({
        where: {
          email: args.email,
        },
      })
    },
  },
  Mutation: {
    createUser: async (parant: any, args: any, context: Context) => {
      console.log(args)
      const user = await prisma.user.create({
        data: {
          name: args.input.name,
          usename: args.input.usename,
          email: args.input.email,
          phone: args.input.phone,
        },
      })
      return user
    },
  },
}

// QUERY, MUTATION, SUBSCRIPTIONS(WSS)
const typeDefs = gql`
  type User {
    id: ID!
    name: String
    usename: String
    email: String
    phone: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    body: String
    userId: Int
    user: User
  }

  type Query {
    getUsers: [User!]!
    getPosts: [Post!]!
    getUserByEmail(email: String!): User!
  }

  input CreateuserInput {
    name: String!
    usename: String!
    email: String!
    phone: String! = "0000000000"
  }

  type Mutation {
    createUser(input: CreateuserInput!): User!
  }
`

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, prisma }),
})

export { handler as GET, handler as POST }
