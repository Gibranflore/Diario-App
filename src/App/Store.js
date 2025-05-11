import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Auth/AuthSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
})