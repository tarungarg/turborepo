import { configureStore } from '@reduxjs/toolkit'
import { cmsSlice } from '@myshop/common'

export const store = configureStore({
  reducer: {
    [cmsSlice.name]: cmsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { Provider } from 'react-redux'
