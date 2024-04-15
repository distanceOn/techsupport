import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { modalReducer } from "./reducers/modalSlice";
import { dataReducer } from "./reducers/dataSlice";

export const appStore = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;
