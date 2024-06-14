import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productCreateSliceFromAdmin';



const reducer = combineReducers({
    products: productsReducer
})



export const store = configureStore({
    reducer
})