import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";
import { showSnackbar } from "./app";

const initialState = {
  isLoaing: false,
  isLoggedIn: false,
  token: "",
  email: "",
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.isLoaing;
      state.isLoaing = action.payload.isLoaing;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
    upateRegisterEmail(state, action) {
      state.email = action.payload.email;
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
        window.localStorage.setItem("user_id", responce.data.user_id);

        dispatch(
          showSnackbar({ severity: "success", message: responce.data.message })
        );
      })
      .catch(function (error) {
        console.log(error);
        dispatch(showSnackbar({ severity: "error", message: error.message }));
      });
  };
}

export function logoutUser() {
  return async (dispatch, getState) => {
    window.localStorage.removeItem("user_id");
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

export function RegisterUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "/auth/register",
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
        dispatch(slice.actions.upateRegisterEmail({ email: formValues.email }));
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: true })
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/verify";
        }
      });
  };
}

export function VerifyEmail(formValue) {
  return async (dispatch, getState) => {
    console.log(formValue);
    await axios
      .post(
        "/auth/verify",
        {
          ...formValue,
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
        window.localStorage.setItem("user_id", responce.data.user_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
