import { createSlice } from '@reduxjs/toolkit';
import { ICartModalPayload } from '../../interfaces/ICartModal';

const cartModalSlice = createSlice({
    name: "cartModal",
    initialState: {isOpen:false},
    reducers: {
        setCartModal: (state, action:ICartModalPayload)=>{
            state.isOpen = action.payload.isOpen;
        }
    }
})

export const {setCartModal} = cartModalSlice.actions;
export default cartModalSlice.reducer;