import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDoctor: null,
  loading: false,
  error: false,
  message: "",
};

export const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    loginStart: () => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentDoctor = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.currentDoctor = null;
      state.message = action.payload;
    },
    logout: (state) => {
      state.currentDoctor = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  doctorSlice.actions;

export default doctorSlice.reducer;
