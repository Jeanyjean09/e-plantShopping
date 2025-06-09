import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.jsx'; // lowercase "c" to match your file

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
