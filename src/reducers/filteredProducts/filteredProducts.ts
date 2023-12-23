import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interfaces/IProduct';

const filteredProductsSlice = createSlice({
    name: "filteredProducts",
    initialState: [] as IProduct[],
    reducers: {
        addFilteredProducts: (state, action)=>{
            state.length = 0;
            state.push(...action.payload)
        }
    }
})

export const {addFilteredProducts} = filteredProductsSlice.actions;
export default filteredProductsSlice.reducer;