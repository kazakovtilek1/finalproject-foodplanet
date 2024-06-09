import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    productTypes: [],
    allProducts: []
};

const productCountSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        incrementProductCount: (state, action) => {
            const {productId} = action.payload;
            const product = state.allProducts.find((p) => p.id === productId);
            if (product) {
                product.count = (product.count || 0) + 1;
            }
        },
        decrementProductCount: (state, action) => {
            const { productId } = action.payload;
            const product = state.allProducts.find((p) => p.id === productId);
            if (product && product.count > 0) {
                product.count--;
            }
        },
        addToLocalStorage: (state, action) => {
            const {productId} = action.payload;
            const product = state.allProducts.find((p) => p.id === productId);
            if (product) {
                let selectedProducts =
                    JSON.parse(localStorage.getItem("selectedProducts")) || [];
                selectedProducts.push(product);
                localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
            }
        }
    }
});

export const {
    setAllProducts,
    incrementProductCount,
    decrementProductCount,
    addToLocalStorage
   } = productCountSlice.actions;
export default productCountSlice.reducer;



