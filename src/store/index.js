import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productTypeReducer from "./productCountSlice";

const reducer = combineReducers({
    productType: productTypeReducer
})

export const store = configureStore({
    reducer
})
