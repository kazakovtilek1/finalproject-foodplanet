import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
};

const counterPizzaSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incrementCounter: (state) => {
            state.value++;
        },
        decrementCounter: (state) => {
            state.value--;
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
});

export const { incrementCounter, decrementCounter } = counterPizzaSlice.actions;
export default counterPizzaSlice.reducer;
