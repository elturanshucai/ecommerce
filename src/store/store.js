import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userReducers'
import productReducers from "./reducers/productReducers";

const store = configureStore({
    reducer: { user: userReducer, product: productReducers }
})

export default store;