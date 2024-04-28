import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";

import React, { useState } from "react";
import StyledBadge from "../StyledBadge";
// import { dispatch } from '../../redux/store'
import { ToggleSidebar } from "../../redux/slice/app";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {current_conversation}= useSelector((state)=> state.conversation.direct_chat)
  const [conversationMenuAnchorEl, setConversationMenuAnchorEl] =useState(null);
  const openConversationMenu = Boolean(conversationMenuAnchorEl);
  const handleClickConversationMenu = (event) => {
    setConversationMenuAnchorEl(event.currentTarget);
  };
  const handleCloseConversationMenu = () => {
    setConversationMenuAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,

        boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
      }}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack
          onClick={() => {
           dispatch(ToggleSidebar())
          }}
          direction={"row"}
          spacing={2}
        >
          <Box>
            <Stack direction={"row"} spacing={1}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt={current_conversation?.name}
                  src={current_conversation?.img}
                />
              </StyledBadge>
              <Stack spacing={0.2}>
                <Typography variant="subtitle2">
                {current_conversation?.name}
                </Typography>
                <Typography variant="caption">Online</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
