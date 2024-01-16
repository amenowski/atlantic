import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;

      item.totalPrice = item.quantity * item.price;
    },
    decQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity--;

      item.totalPrice = item.quantity * item.price;

      if (item.quantity <= 0)
        cartSlice.caseReducers.deleteFromCart(state, action);
    },
  },
});

export const getCart = (state) => state.cart.cart;

export const getTotalPrice = (state) =>
  state.cart.cart.reduce((prev, item) => prev + item.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentProductQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const { addToCart, deleteFromCart, incQuantity, decQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
