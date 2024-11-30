import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
  status: 'idle', // Can be 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.status = 'loading';
    },
    registerUserSuccess: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload; // Set the registered user
    },
    registerUserFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

// Export the actions to be used in the component
export const { registerUser, registerUserSuccess, registerUserFailure } = userSlice.actions;

export default userSlice.reducer;
