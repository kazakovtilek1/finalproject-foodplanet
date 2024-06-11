import {createSlice} from "@reduxjs/toolkit";

const saveCartToLocalStorage = (cart) => {
    try {
        const serializedCart = JSON.stringify(cart);
        localStorage.setItem('cart', serializedCart);
    } catch (error) {
        console.error('error');
    }
};

const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (error) {
        console.error('error');
        return [];
    }
};

const productCountSlice = createSlice({
    name: 'products',
    initialState: {
        productTypes: [],
        allProducts: [],
        cart: loadCartFromLocalStorage(),
    },
    reducers: {
        setProductTypes(state, action) {
            state.productTypes = action.payload;
        },
        setAllProducts(state, action) {
            state.allProducts = action.payload;
        },
        incrementProductCount(state, action) {
            const product = state.allProducts.find(product => product.id === action.payload.productId);
            if (product) {
                product.count = (product.count || 0) + 1;
            }
        },
        decrementProductCount(state, action) {
            const product = state.allProducts.find(product => product.id === action.payload.productId);
            if (product && product.count > 0) {
                product.count -= 1;
            }
        },
        addToLocalStorage(state, action) {
            const product = state.allProducts.find(product => product.id === action.payload.productId);
            if (product) {
                state.cart.push(product);
                saveCartToLocalStorage(state.cart);
            }
        },
    },
});

export const {
    setProductTypes,
    setAllProducts,
    incrementProductCount,
    decrementProductCount,
    addToLocalStorage
   } = productCountSlice.actions;
export default productCountSlice.reducer;



