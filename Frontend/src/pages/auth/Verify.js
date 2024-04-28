import { Stack, Typography } from "@mui/material";
import React from "react";
import VerifyForm from "../../sections/auth/VerifyForm";

function Verify() {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography>Please Verify OTP</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">
            Send to email (sarkar@gmail.com)
          </Typography>
        </Stack>
      </Stack>
      <VerifyForm />
    </>
  );
}

export default Verify;
