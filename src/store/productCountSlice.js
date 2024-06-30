import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getProductsType = createAsyncThunk(
    "productTypes/fetchProductTypes",
    async () => {
        const response = await axios.get("http://localhost:8000/productTypes");
        return response.data;
    }
);

export const fetchNewProducts  = createAsyncThunk(
    "products/fetchNewProducts",
    async (id) => {
        const response = await axios.get(`http://localhost:8000/allProducts?productType=${id}&news=true`);
        return response.data.map(product => ({ ...product, count: 1 }));
    }
);

export const fetchMenuProducts  = createAsyncThunk(
    "products/fetchMenuProducts",
    async (id) => {
        const response = await axios.get(`http://localhost:8000/allProducts?productType=${id}&menu=true`);
        return response.data.map(product => ({ ...product, count: 1 }));
    }
);


const saveCartToLocalStorage = (cart, productType) => {
    try {
        localStorage.setItem(`cart_${productType}`, JSON.stringify(cart));
    } catch (error) {
        console.error(`Ошибка сохранения корзины ${productType} в localStorage:`, error);
    }
};


const loadCartFromLocalStorage = (productType) => {
    try {
      const cartData = localStorage.getItem(`cart_${productType}`);
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error(`Ошибка загрузки корзины ${productType} из localStorage:`, error);
      return [];
    }
  };


const productCountSlice = createSlice({
    name: "products",
    initialState: {
        productTypes: [],
        menuProducts: [],
        newProducts: [],
        itemCount: 0,
        currentMenuProductType: null,
        currentNewProductType: null,
        cart: {
            burgers:
                JSON.parse(localStorage.getItem("cart_burgers")) || [],
            pizzas:
                JSON.parse(localStorage.getItem("cart_pizzas")) || [],
        }
    },
    reducers: {
        setItemCount: (state) => {
            const { burgers, pizzas } = state.cart;
            state.itemCount = burgers.length + pizzas.length;
          },
        incrementMenuProductCount(state, action) {
            const { productId } = action.payload;
            const productInMenuIndex = state.menuProducts.findIndex(product => product.id === productId);

            if (productInMenuIndex !== -1) {
                state.menuProducts[productInMenuIndex].count += 1;
                saveCartToLocalStorage(state.cart.pizzas, 'pizzas');
            }
        },
        decrementMenuProductCount(state, action) {
            const { productId } = action.payload;
            const productInMenuIndex = state.menuProducts.findIndex(product => product.id === productId);

            if (productInMenuIndex !== -1 && state.menuProducts[productInMenuIndex].count > 1) {
                state.menuProducts[productInMenuIndex].count -= 1;
                saveCartToLocalStorage(state.cart.pizzas, 'pizzas');
            }
        },
        addToMenuLocalStorage(state, action) {
            const { productId } = action.payload;
            const productToAdd = state.menuProducts.find(product => product.id === productId);
            const productInMenuIndex = state.menuProducts.findIndex(product => product.id === productId);

            if (productToAdd) {
                const existingProductIndex = state.cart.pizzas.findIndex(product => product.id === productId);

                if (existingProductIndex !== -1) {
                    state.cart.pizzas[existingProductIndex].count = state.menuProducts[productInMenuIndex].count;
                } else {
                    state.cart.pizzas.push({ ...productToAdd, count: state.menuProducts[productInMenuIndex].count });
                }

                saveCartToLocalStorage(state.cart.pizzas, 'pizzas');
            }
        },
        incrementNewProductCount(state, action) {
            const { productId } = action.payload;
            const productInNewIndex = state.newProducts.findIndex(product => product.id === productId);

            if (productInNewIndex !== -1) {
                state.newProducts[productInNewIndex].count += 1;
                saveCartToLocalStorage(state.cart.burgers, 'burgers');
            }
        },
        decrementNewProductCount(state, action) {
            const { productId } = action.payload;
            const productInNewIndex = state.newProducts.findIndex(product => product.id === productId);

            if (productInNewIndex !== -1 && state.newProducts[productInNewIndex].count > 1) {
                state.newProducts[productInNewIndex].count -= 1;
                saveCartToLocalStorage(state.cart.burgers, 'burgers');
            }
        },
        addToProductLocalStorage(state, action) {
            const { productId } = action.payload;
            const productToAdd = state.newProducts.find(product => product.id === productId);
            const productInNewIndex = state.newProducts.findIndex(product => product.id === productId);

            if (productToAdd) {
                const existingProductIndex = state.cart.burgers.findIndex(product => product.id === productId);

                if (existingProductIndex !== -1) {
                    state.cart.burgers[existingProductIndex].count = state.newProducts[productInNewIndex].count;
                } else {
                    state.cart.burgers.push({ ...productToAdd, count: state.newProducts[productInNewIndex].count });
                }
                saveCartToLocalStorage(state.cart.burgers, 'burgers');
            }
        },

        setMenuProductType: (state, action) => {
            state.currentMenuProductType = action.payload;
        },
        setNewProductType: (state, action) => {
            state.currentNewProductType = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProductsType.fulfilled, (state, action) => {
            state.productTypes = action.payload;
        });
        builder.addCase(fetchNewProducts.fulfilled, (state, action) => {
            state.newProducts = action.payload.map(product => ({ ...product, count: 1 }));
        });
        builder.addCase(fetchMenuProducts.fulfilled, (state, action) => {
            state.menuProducts = action.payload.map(product => ({ ...product, count: 1 }));
        });
    },
});

export const {
    setItemCount,
    incrementMenuProductCount,
    decrementMenuProductCount,
    addToMenuLocalStorage,
    incrementNewProductCount,
    decrementNewProductCount,
    addToProductLocalStorage,
    setMenuProductType,
    setNewProductType
   } = productCountSlice.actions;
export default productCountSlice.reducer;



