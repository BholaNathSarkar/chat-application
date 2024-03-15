import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";

function Login() {
  return (
    <>
      <Stack
        spacing={2}
        sx={{ mb: 5, position: "relative" }}
        direction={"column"}
      >
        <Typography variant="h4">Login to Talk</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an Account
          </Link>
        </Stack>
      </Stack>
      {/* Login form */}
      <LoginForm />

      {/* Auth Social */}
      <AuthSocial />
    </>
  );
}

export default Login;
