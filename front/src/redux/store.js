import { configureStore } from "@reduxjs/toolkit";
import counterCounterReducer from './cart'
export const store=configureStore({
    reducer:{
        cartCounter:counterCounterReducer
    }
})