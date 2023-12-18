import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "../reducers/modal/modalSlice";
import userReducer from "../reducers/user/userSlice";
import loadingReducer from "../reducers/loading/loadingSlice";

export default configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
        loading: loadingReducer
    }
})