import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart
const initialState = {
  items: [], // Each item: { name, image, cost, quantity }
};

// Create a slice for cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Remove an item from the cart by name
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload; // payload is just the name
      state.items = state.items.filter((item) => item.name !== itemNameToRemove);
    },

    // Update the quantity of a specific item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to use in store.js
export default cartSlice.reducer;
