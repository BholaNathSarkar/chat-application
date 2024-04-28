import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  User,
  Users,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar"; // Corrected import
import { useTheme } from "@emotion/react";
import {
  Search,
  SearchIconWrapper,
  StyleBaseInput,
} from "../../components/search";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";
import { socket } from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { FetchDirectConversation } from "../../redux/slice/conversation";

function Chats() {
  const dispatch = useDispatch();
  const user_id = window.localStorage.getItem("user_id");
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const { conversation } = useSelector(
    (state) => state.conversation.direct_chat
  );
  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      // data => List of conversation
      dispatch(FetchDirectConversation({ conversation: data }));
    });
  }, []);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor:
            theme.palette.mode === "Light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Chats</Typography>
            <Stack alignItems="center" direction={"row"} spacing={0.5}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
              >
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyleBaseInput
                placeholder="Search.."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack spacing={1.5}>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <ArchiveBox size={24} />
              <Button>Archive</Button>
            </Stack>
            <Divider />
          </Stack>
          <Stack
            spacing={2}
            direction="column"
            sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.4}>
                {/* <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  Pinnged
                </Typography>
                {ChatList.filter((el) => el.pinned).map((el, index) => (
                  <ChatElement key={index} {...el} />
                ))} */}
              </Stack>

              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                  All Chats
                </Typography>
                {conversation?.filter((el) => !el.pinned)
                  .map((el, index) => (
                    <ChatElement key={index} {...el} />
                  ))}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handelClose={handleCloseDialog} />
      )}
    </>
  );
}

export default Chats;
