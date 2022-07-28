import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(stata) {
      stata.cartIsVisible = !stata.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
