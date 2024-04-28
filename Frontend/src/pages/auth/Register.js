import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

function Register() {
  
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Get Started with Tawk
      </Typography>
      <Typography variant="body2" gutterBottom>
        Already have an account?{" "}
        <Link to="/auth/login" component={RouterLink} variant="subtitle2">
          Sign in
        </Link>
      </Typography>
      {/* Register form */}

      <RegisterForm />
      <Typography
        componenty={"div"}
        sx={{
          color: "text.secondary",
          mt: 3,
          typography: "caption",
          textAlign: "center",
        }}
      >
        {"By sigining up, I agree to "}
        <Link underline="always" color="text.primary">
          Terms of service
        </Link>
        {" and "}
        <Link underline="always" color="text.primary">
          Privacy Policy
        </Link>
      </Typography>
      <AuthSocial />
    </>
  );
}

export default Register;
