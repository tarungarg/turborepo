import { ApolloServer } from 'apollo-server-micro'
import { ObjectType, Field, ID, Resolver, Query } from 'type-graphql'

@ObjectType()
export class Dog {
  @Field(() => ID)
  name: string
}
@Resolver(Dog)
export class DogResolver {
  @Query(() => [Dog])
  dogs(): Dog[] {
    return [{ name: 'Dog1' }, { name: 'Dog2' }]
  }
}

const server = new ApolloServer({})

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default async function GET(req: any, res: any) {
  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
}
