import {
  Stack,
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyleBaseInput,
} from "../../components/search";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { ChatList } from "../../data";
import ChatElement from "../../components/ChatElement";
import CreateGroup from "../../sections/main/CreateGroup";

function Group() {
  const [openDialog, setopenDialog] = useState(false);

  const handleOpenDialog = () => {
    setopenDialog(true);
  };
  const handleCloseDialog = () => {
    setopenDialog(false);
  };

  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left  */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
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
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                Create New Groups
              </Typography>
              <IconButton
                onClick={() => {
                  setopenDialog(true);
                }}
              >
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={2}
              direction="column"
              sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
            >
              <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                Pinnged
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el, index) => (
                <ChatElement key={index} {...el} />
              ))}

              <Stack spacing={2.4}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                  All Groups
                </Typography>
                {ChatList.filter((el) => !el.pinned).map((el, index) => (
                  <ChatElement key={index} {...el} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
      </Stack>
      {openDialog && (
        <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}

export default Group;
