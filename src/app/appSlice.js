// https://redux-toolkit.js.org/usage/usage-guide#simplifying-slices-with-createslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export const selectIsOpen = (state) => state.app.isOpen;
export default appSlice.reducer;
