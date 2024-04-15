import { createSlice } from "@reduxjs/toolkit";
import { ModalType } from "../../utils/types";

type ModalState = {
  isOpen: boolean;
  type: ModalType;
};

const initialState: ModalState = {
  isOpen: false,
  type: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.type = payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.type = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
