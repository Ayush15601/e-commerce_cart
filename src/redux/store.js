import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/counterslice.jsx"

export const store = configureStore({

    reducer: {
        product: productReducer
    }
})