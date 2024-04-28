import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
  sanckbar: {
    open: false,
    message: null,
    severity: null,
  },
  users: [],
  friends: [],
  friendRequests: [],
  chat_type: null,
  room_id: {
    isOpen: false,
    roomId: null,
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
    openSnackbar(state, action) {
      console.log(`redux ${action.payload.message}`);
      state.sanckbar.open = true;
      state.sanckbar.severity = action.payload.severity;
      state.sanckbar.message = action.payload.message;
    },
    closeSnackbar(state, action) {
      state.sanckbar.open = false;
      state.sanckbar.severity = null;
      state.sanckbar.message = null;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequest(state, action) {
      state.friendRequests = action.payload.request;
    },
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id.isOpen = action.payload.isOpen;
      state.room_id.roomId = action.payload.room_id;
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

export function showSnackbar({ severity, message }) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackbar({
        severity,
        message,
      })
    );
    setTimeout(() => {
      dispatch(slice.actions.closeSnackbar());
    }, 4000);
  };
}

export function closeSnackbar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.closeSnackbar());
  };
}

export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(getState().auth.token);
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get("/user/get-friends-request", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((response) => {
        console.log(response);

        dispatch(
          slice.actions.updateFriendRequest({ request: response.data.data })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function SelectConversation({ room_id, isOpen }) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id, isOpen }));
  };
}
