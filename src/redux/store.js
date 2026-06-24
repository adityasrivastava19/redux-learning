import { configureStore } from '@reduxjs/toolkit'
import { counter } from './features'

export const store = configureStore({
  reducer: {
    count:counter.reducer,
  },
})