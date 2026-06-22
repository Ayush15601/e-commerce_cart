import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({

    name: "cart",

    initialState: {
        
        item: [],
        tempItem: [],
        totalPrice: 0
    },

    reducers: {

        addToCart: (state, action) => {

            const existingItem = state.item.find( (item) => item.id == action.payload.id)

            if(existingItem){
                existingItem.quantity += 1

            } else{
                state.item.push({...action.payload, quantity: 1})   
            }  

            state.tempItem = {...action.payload}
            
            state.totalPrice = state.item.reduce( (sum, item) => sum + item.price * item.quantity, 0)
        },
        
        removeFromCart: (state, action) => {
            
            state.item = state.item.filter( (item) => item.id !== action.payload.id )
            
            // state.tempItem = [...state.item]
            
            state.totalPrice = state.item.reduce( (sum, item) => sum + item.price * item.quantity, 0)
    }
}
}) 

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer