import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store.js"; // Import store

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      // console.log(`1st ${JSON.stringify(state.sidebar)}`);
      state.sidebar.open = !state.sidebar.open;
      // console.log(`2st ${JSON.stringify(state.sidebar)}`);
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

//thung functions

export function ToggleSidebar() {
  // Renamed function to match action name
  console.log(slice.actions.toggleSidebar());
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  // Added type parameter
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}
