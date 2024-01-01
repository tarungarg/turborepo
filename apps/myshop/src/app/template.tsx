import React from 'react'
import StoreProvider from '@/providers/StoreProviders'
import Layout from '@/components/layout'
import { ConstantsService, CoreConstantsEnum } from '@myshop/core'
import './globals.css'

export default function Template({ children }: { children: React.ReactNode }) {
  ConstantsService.setConstants(
    CoreConstantsEnum.APIUrl,
    process.env.SERVER_URI as string,
  )

  return (
    <StoreProvider>
      <Layout>{children}</Layout>
    </StoreProvider>
  )
}
