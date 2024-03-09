import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation/index";
import { useTheme } from "@mui/material/styles";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chats */}
      <Chats />

      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
          // marginRight: "-420px",
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
