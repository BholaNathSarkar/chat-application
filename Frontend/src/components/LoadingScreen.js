import {Stack, Typography } from "@mui/material";

import React from "react";

const LoadingScreen = () => {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100vh" }}
      >
        <Typography>Loading....</Typography>
      </Stack>
    </>
  );
};

export default LoadingScreen;
