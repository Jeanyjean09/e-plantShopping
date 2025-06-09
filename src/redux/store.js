import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // lowercase c to match filename

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;