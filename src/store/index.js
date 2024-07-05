import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productTypeReducer from "./productCountSlice";
import reviewsReducer from "./reviewsSlice";


const reducer = combineReducers({
    productTypeReducer,
    reviewsReducer
})


export const store = configureStore({
    reducer
})
