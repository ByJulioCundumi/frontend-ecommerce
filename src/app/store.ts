import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "../reducers/modal/modalSlice";

export default configureStore({
    reducer: {
        modal: modalReducer
    }
})