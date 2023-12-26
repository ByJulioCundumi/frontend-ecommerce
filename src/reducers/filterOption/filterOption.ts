import { createSlice } from "@reduxjs/toolkit";

const filterOptionSlice = createSlice({
    name: "filterOption",
    initialState: {option:""},
    reducers: {
        setFilterOption: (state, action)=>{
            state.option = action.payload.option
        }
    }
})

export const {setFilterOption} = filterOptionSlice.actions;
export default filterOptionSlice.reducer;