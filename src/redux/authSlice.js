import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  message: '',
  isAuthenticated: false,
  status: 'idle', 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.status = 'loading';
    },
    loginSuccess: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.isAuthenticated = true;
      state.message = 'Login successful!';
    },
    loginFailure: (state, action) => {
      state.status = 'failed';
      state.message = action.payload;
    },
    registerSuccess: (state, action) => {
      state.status = 'succeeded';
      state.message = 'Registration successful! Please log in.';
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.message = '';
      state.status = 'idle';
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, registerSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
