import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Add item to cart, or increase quantity if already in cart
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // Remove item by id
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // You can add more reducers like increaseQty, decreaseQty, clearCart etc.
  },
});

export const { addItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
