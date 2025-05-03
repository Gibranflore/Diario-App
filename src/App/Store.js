import { configureStore } from '@reduxjs/toolkit'
import { AuthSlice } from './Auth'

export const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer
    },
})