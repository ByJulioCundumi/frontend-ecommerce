import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "../reducers/modal/modalSlice";
import userReducer from "../reducers/user/userSlice";

export default configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer
    }
})