import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from './cart'

import { setupListeners } from '@reduxjs/toolkit/query'
import  usersApi  from './product'
export const store=configureStore({
    reducer:{
        cartCounter:cartItemReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})

setupListeners(store.dispatch)