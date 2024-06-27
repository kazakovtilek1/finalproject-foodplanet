import { configureStore } from "@reduxjs/toolkit";
import counterPizzaReducer from "../features/pizza/counterPizzaSlice";

export const store = configureStore({
    reducer: {
        counterPizza: counterPizzaReducer,
    },
});
