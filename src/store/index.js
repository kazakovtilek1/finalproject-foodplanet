import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productTypeReducer from "./productCountSlice";

const reducer = combineReducers({
    products: productTypeReducer
})

export const store = configureStore({
    reducer
})
