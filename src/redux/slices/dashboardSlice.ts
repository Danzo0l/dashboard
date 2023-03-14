import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  sidebarIsVisible: boolean;
  toolbarIsVisible: boolean;
}

const initialState: InitialState = {
  sidebarIsVisible: true,
  toolbarIsVisible: true,
};

const dashboardSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    setSidebarIsVisible(state, action) {
      state.sidebarIsVisible = action.payload;
    },
    setToolbarIsVisible(state, action) {
      state.toolbarIsVisible = action.payload;
    },
  },
});

export const { setSidebarIsVisible } = dashboardSlice.actions;
export default dashboardSlice.reducer;
