import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProduct";
import { IShoppingCartPayload } from "../../interfaces/IShoppingCart";

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState: [] as IProduct[],
    reducers: {
        addToCart: (state, action: IShoppingCartPayload)=>{
            const index = state.findIndex((p)=> p.id === action.payload.id)
            if(index !== -1){
                state[index].quantity = state[index].quantity + 1;
            }else{
                state.push(action.payload)
            }
        },

        increaseCart: (state, action: IShoppingCartPayload)=>{
            const index = state.findIndex((p)=> p.id === action.payload.id)
            if(index !== -1){
                state[index].quantity = action.payload.quantity + 1;
            }
        },

        decreaseCart: (state, action: IShoppingCartPayload)=>{
            const index = state.findIndex((p)=> p.id === action.payload.id)
            if(state[index].quantity > 1){
                state[index].quantity = action.payload.quantity - 1;
            }
        },

        removeFromCart: (state, action: IShoppingCartPayload)=>{
            const index = state.findIndex((p)=> p.id === action.payload.id)
            if(index !== -1){
                const newCart = state.filter((p)=> p.id !== action.payload.id)
                state.length = 0;
                state.push(...newCart)
            }
        }
    }
})

export const {addToCart, increaseCart, decreaseCart, removeFromCart} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;