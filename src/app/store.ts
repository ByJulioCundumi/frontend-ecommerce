import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "../reducers/modal/modalSlice.js";
import userReducer from "../reducers/user/userSlice.js";
import loadingReducer from "../reducers/loading/loadingSlice.js";
import productReducer from "../reducers/products/productsSlice.js";

export default configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
        products: productReducer,
        loading: loadingReducer
    }
})