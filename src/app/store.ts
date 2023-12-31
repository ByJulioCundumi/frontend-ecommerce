import {configureStore} from "@reduxjs/toolkit";
import modalReducer from "../reducers/modal/modalSlice.js";
import userReducer from "../reducers/user/userSlice.js";
import loadingReducer from "../reducers/loading/loadingSlice.js";
import productReducer from "../reducers/products/productsSlice.js";
import filteredProductsReducer from "../reducers/filteredProducts/filteredProducts.js";
import cartModalReducer from "../reducers/cartModal/cartModal.js";
import shoppingCartReducer from "../reducers/shoppingCart/shoppingCart.js";
import filterOptionReducer from "../reducers/filterOption/filterOption.js";

export default configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
        products: productReducer,
        loading: loadingReducer,
        filteredProducts: filteredProductsReducer,
        cartModal: cartModalReducer,
        shoppingCart: shoppingCartReducer,
        filterOption: filterOptionReducer
    }
})