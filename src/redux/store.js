import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import contactReducer from './contactSlice';
import userReducer from './userSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    contact: contactReducer,
    user: userReducer,
  },
});

export default store;
