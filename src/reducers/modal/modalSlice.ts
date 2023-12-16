import { createSlice } from "@reduxjs/toolkit";
import { IModalPayload } from "../../interfaces/IModal";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {isOpen: false},
    reducers: {
        setModal: (state, action:IModalPayload)=>{
            state.isOpen = action.payload.isOpen;
        }   
    }
})

export const {setModal} = modalSlice.actions;
export default modalSlice.reducer;
