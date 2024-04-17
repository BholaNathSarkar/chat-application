import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoaing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

// Reducer
export default slice.reducer;

// Login

export function loginUser(formValues) {
  // form vale=> (email,pass)
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (responce) {
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: responce.data.token,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export function logoutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
  };
}

export function forgotPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/forgot-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function newPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/reset-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((responce) => {
        console.log(responce);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: responce.data.token,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
