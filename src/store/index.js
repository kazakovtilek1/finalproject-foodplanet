import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productTypeReducer from "./productCountSlice";
import productsReducer from './slices/productCreateSliceFromAdmin';



const reducer = combineReducers({
    productsMain: productTypeReducer,
    products: productsReducer
})


export const store = configureStore({
    reducer
})
