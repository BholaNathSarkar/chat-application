import { useTheme } from "@mui/material/styles";
import {
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ArrowLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import {  UpdateSidebarType } from "../redux/slice/app";
import Message from "./Conversation/Message";

function StartMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            space={4}
            alignItems={"center"}
          >
            <IconButton>
              <ArrowLeft
                onClick={() => {
                  dispatch(UpdateSidebarType("CONTACT"));
                }}
              />
            </IconButton>
            <Typography variant="subtitle2">Start Mesages</Typography>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          p={2}
          spacing={3}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
}

export default StartMessages;
