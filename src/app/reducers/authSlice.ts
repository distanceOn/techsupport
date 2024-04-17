import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: false,
};

const persistedState = localStorage.getItem("isAuth");
if (persistedState !== null) {
  initialState.isAuth = persistedState === "true";
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
      localStorage.setItem("isAuth", "true");
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem("isAuth");
    },
  },
});

export const { login, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;
