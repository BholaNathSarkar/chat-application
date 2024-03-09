import { createSlice } from "@reduxjs/toolkit";
import {store} from "../store.js"; // Import store


const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be contact , star
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export const { toggleSidebar, updateSidebarType } = slice.actions;

export default slice.reducer;

export function toggleSidebarAction() { // Renamed function to match action name
  return async () => {
    store.dispatch(slice.actions.toggleSidebar());
  };
}

export function updateSidebarTypeAction(type) { // Added type parameter
  return async () => {
    store.dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}
