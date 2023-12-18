import { createSlice } from "@reduxjs/toolkit";
import { ILoading } from "../../interfaces/ILoading";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {isLoading: false},
    reducers: {
        setLoading: (state, action: ILoading)=>{
            state.isLoading = action.payload.isLoading
        }
    }
})

export const {setLoading} = loadingSlice.actions;
export default loadingSlice.reducer;