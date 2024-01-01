'use client'
import { Provider, store } from '@myshop/redux-util'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
