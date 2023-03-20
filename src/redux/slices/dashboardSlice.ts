import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  sidebarIsVisible: boolean;
}

const initialState: InitialState = {
  sidebarIsVisible: true,
};

const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setSidebarIsVisible(state, action) {
      state.sidebarIsVisible = action.payload;
    },
  },
});

export const { setSidebarIsVisible } = filterSlice.actions;
export default filterSlice.reducer;
