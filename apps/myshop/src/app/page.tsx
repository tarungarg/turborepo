"use client"
import { Footer, Header } from '@myshop/common'
import { ConstantsService, CoreConstantsEnum, LoggerService } from '@myshop/core';
import StoreProvider from '@/providers/StoreProviders';

export default function Home() {

  ConstantsService.setConstants(CoreConstantsEnum.APIUrl, 'http://localhost:4000')

  return (
    <main className="">
        <StoreProvider>
          <Header />
          <Footer/>
        </StoreProvider>
      </main>
  )
}
