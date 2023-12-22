import { createSlice } from '@reduxjs/toolkit';
import { IProduct, IProductPayload, IProductsPayload } from '../../interfaces/IProduct';

const productsSlice = createSlice({
    name: "products",
    initialState:  [] as IProduct[],
    reducers: {
        addProduct: (state, action:IProductPayload)=>{
            state.push(action.payload)
        },
        
        updateProduct: (state, action:IProductPayload)=>{
            const index = state.findIndex((p)=>{return p.id === action.payload.id})
            //
            if(index !== -1){
                state[index] = {...state[index], ...action.payload}
            }
        },

        deleteProduct: (state, action: IProductPayload) => {
            const newProducts = state.filter((p) => p.id !== action.payload.id);
            state.length = 0;
            state.push(...newProducts)
        },
        
        addProducts: (state, action:IProductsPayload)=>{
            state.length = 0;
            state.push(...action.payload);
        }
    }
})

export const {addProduct, updateProduct, deleteProduct, addProducts} = productsSlice.actions;
export default productsSlice.reducer;