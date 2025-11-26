import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAdmin: null,
  loading: false,
  error: false,
  message: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    loginStart: () => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentAdmin = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.currentAdmin = null;
      state.message = action.payload;
    },
    logout: (state) => {
      state.currentAdmin = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  adminSlice.actions;

export default adminSlice.reducer;
