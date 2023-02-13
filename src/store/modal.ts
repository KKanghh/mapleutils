import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
  message: string;
}

const initialModalState = { isOpen: false, message: "" };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    open(state, action) {
      state.isOpen = true;
      state.message = action.payload;
    },
    close(state) {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
