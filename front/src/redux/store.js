import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from './cart'
export const store=configureStore({
    reducer:{
        cartCounter:cartItemReducer
    }
})