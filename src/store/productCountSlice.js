import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProductsType = createAsyncThunk(
    "productTypes/fetchProductTypes",
    async () => {
        const response = await axios.get("http://localhost:8000/productTypes");
        return response.data;
    }
);

export const filtered = createAsyncThunk(
    "products/fetchProductsByType",
    async (id) => {
        // const response = await axios.get(`http://localhost:8000/allProducts?productType=${id}&news=true`);
        const response = await axios.get(`http://localhost:8000/allProducts?productType=${id}`);
        return response.data;
    }
);


const saveCartToLocalStorage = (cart) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
};



const productCountSlice = createSlice({
    name: "products",
    initialState: {
        productTypes: [],
        allProducts: [],
        currentProductType: null,
        cart: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        incrementProductCount(state, action) {
            const { productId } = action.payload;
            const product = state.allProducts.find((product) => product.id === productId);
            if (product) {
                product.count = (product.count || 0) + 1;
            }
        },
        decrementProductCount(state, action) {
            const { productId } = action.payload;
            const product = state.allProducts.find((product) => product.id === productId);
            if (product && product.count > 0) {
                product.count -= 1;
            }
        },
        addToLocalStorage(state, action) {
            const { productId } = action.payload;
            const productToAdd = state.allProducts.find((product) => product.id === productId);

            if (productToAdd) {
                if (!Array.isArray(state.cart)) {
                    state.cart = [];
                }

                const existingProduct = state.cart.find((product) => product.id === productId);

                if (existingProduct) {
                    existingProduct.count = productToAdd.count;
                } else {
                    state.cart.push({ ...productToAdd, count: productToAdd.count });
                }

                saveCartToLocalStorage(state.cart);
            }
        },
        setCurrentProductType: (state, action) => {
            state.currentProductType = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsType.fulfilled, (state, action) => {
            state.productTypes = action.payload;
        });
        builder.addCase(filtered.fulfilled, (state, action) => {
            state.allProducts = action.payload;
        });
    },
});

export const {
    incrementProductCount,
    decrementProductCount,
    addToLocalStorage,
    setCurrentProductType
   } = productCountSlice.actions;
export default productCountSlice.reducer;



