import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity(state, action) {
      const { index, action: type } = action.payload;
      if (type === 'increase') state.items[index].quantity += 1;
      if (type === 'decrease' && state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      }
    },
    removeFromCart(state, action) {
      state.items.splice(action.payload, 1);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
