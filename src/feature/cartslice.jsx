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
                return

            } else{
                state.item.push({...action.payload, quantity: 1})   
            }  

            state.tempItem = [...state.item]
            
            state.totalPrice = Number(state.item.reduce( (sum, item) => sum + item.price * item.quantity, 0).toFixed(2))
        },

        updateTempQuatnity: (state, action) => {
            const tempItem = state.tempItem.find( tempItem => tempItem.id === action.payload.id)

            if(tempItem){
                tempItem.quantity = action.payload.quantity
            }
        },

        updateItemQuantity: (state, action) => {
            const  tempItem = state.tempItem.find( tempItem => tempItem.id === action.payload.id) 
           
            const  cartItem = state.item.find( item => item.id === action.payload.id)
            
            if(tempItem && cartItem){

                cartItem.quantity = tempItem.quantity
            }
           
            state.totalPrice = Number(state.item.reduce( (sum, item) => sum + item.price * item.quantity, 0).toFixed(2))
        },
        
        removeFromCart: (state, action) => {
            
            state.item = state.item.filter( (item) => item.id !== action.payload.id )
            
            state.tempItem = [...state.item]
            
            state.totalPrice = Number(state.item.reduce( (sum, item) => sum + item.price * item.quantity, 0).toFixed(2))
    }
}
}) 

export const {addToCart, removeFromCart, updateTempQuatnity, updateItemQuantity} = cartSlice.actions

export default cartSlice.reducer