import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

function NewPassword() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Reset Password?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please Set New Password
        </Typography>
      </Stack>
      {/* new Password form */}
      <NewPasswordForm />

      <Link
        component={RouterLink}
        to="/auth/login"
        color="inherit"
        variant="subtitle2"
        sx={{ mt: 3, mx: "auto", alignItems: "center" }}
      >
        <CaretLeft />
        Return to Sign In
      </Link>
    </>
  );
}

export default NewPassword;
