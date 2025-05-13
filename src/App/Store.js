import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Auth'
import { JournalSlice } from './journal'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        Journal: JournalSlice.reducer
    },
})