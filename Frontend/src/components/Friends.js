import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { socket } from "../socket";
import { Chat } from "phosphor-react";

const user_id = window.localStorage.getItem("user_id");

const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const UsersComponent = ({ firstName, lastName, _id, online, img }) => {
  const theme = useTheme();
  const name = `${firstName} ${lastName}`;
  //   console.log(`_id: ${_id} user_id:${user_id}`);
  return (
    <>
      <StyledChatBox
        sx={{
          with: "100%",
          borderRadius: 1,
          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems={"center"} spacing={2}>
            {" "}
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            ) : (
              <Avatar alt={name} src={img} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button
              onClick={() => {
                socket.emit(
                  "friend_request",
                  { to: _id, from: user_id },
                  () => {
                    alert("request sent");
                  }
                );
              }}
            >
              Send Request
            </Button>
          </Stack>
        </Stack>
      </StyledChatBox>
    </>
  );
};

const FriendRequestComponent = ({
  firstName,
  lastName,
  _id,
  online,
  img,
  id,
}) => {
  const theme = useTheme();
  const name = `${firstName} ${lastName}`;
  
  return (
    <>
      <StyledChatBox
        sx={{
          with: "100%",
          borderRadius: 1,
          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems={"center"} spacing={2}>
            {" "}
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            ) : (
              <Avatar alt={name} src={img} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button
              onClick={() => {
                socket.emit("accept_request", { request_id: id });
              }}
            >
              Accept Request
            </Button>
          </Stack>
        </Stack>
      </StyledChatBox>
    </>
  );
};

const FriendComponents = ({ firstName, lastName, _id, online, img }) => {
  const theme = useTheme();
  const name = `${firstName} ${lastName}`;
  return (
    <>
      <StyledChatBox
        sx={{
          with: "100%",
          borderRadius: 1,
          backgroundColor: theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems={"center"} spacing={2}>
            {" "}
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            ) : (
              <Avatar alt={name} src={img} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <IconButton
              onClick={() => {
                // Start a new converation
                socket.emit("start_conversation", { to: _id, from: user_id });
              }}
            >
              <Chat />
            </IconButton>
          </Stack>
        </Stack>
      </StyledChatBox>
    </>
  );
};

export { UsersComponent, FriendRequestComponent, FriendComponents };
