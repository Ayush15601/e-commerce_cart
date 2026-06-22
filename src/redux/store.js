import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/counterslice.jsx"
import cartReducer from "../feature/cartslice.jsx"

export const store = configureStore({

    reducer: {
        product: productReducer,
        cart: cartReducer
    }
})