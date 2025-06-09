import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';  // <-- changed here

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
