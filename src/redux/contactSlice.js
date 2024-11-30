import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: '',
  loading: false,
  success: false,
  error: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value; 
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuccess: (state) => {
      state.success = true;
      state.error = ''; // Clear any previous error messages
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.success = false; 
    },
    resetForm: (state) => {
      state.name = '';
      state.email = '';
      state.message = '';
      state.loading = false;
      state.success = false;
      state.error = '';
    },
  },
});

export const { setField, setLoading, setSuccess, setError, resetForm } = contactSlice.actions;

export default contactSlice.reducer;
