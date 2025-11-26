import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPaciente: null,
  loading: false,
  error: false,
  message: "",
};

export const pacienteSlice = createSlice({
  name: "paciente",
  initialState,
  reducers: {
    loginStart: () => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentPaciente = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.currentPaciente = null;
      state.message = action.payload;
    },
    logout: (state) => {
      state.currentPaciente = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  pacienteSlice.actions;

export default pacienteSlice.reducer;
