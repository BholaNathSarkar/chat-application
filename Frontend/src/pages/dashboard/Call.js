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
import { MagnifyingGlass, Phone, Plus } from "phosphor-react";
import CreateGroup from "../../sections/main/CreateGroup";
import { CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

function Call() {
  const theme = useTheme();
  const [openDialog, setopenDialog] = useState(false);

  const handleOpenDialog = () => {
    setopenDialog(true);
  };
  const handleCloseDialog = () => {
    setopenDialog(false);
  };
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
              <Typography variant="h5">Call Log</Typography>
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
                Start New Converstaion
              </Typography>
              <IconButton
                onClick={() => {
                  setopenDialog(true);
                }}
              >
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>

            <Stack
              spacing={2}
              sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
            >
              {/* Call logs */}
              {CallLogs.map((el)=> <CallLogElement {...el} />)}
              
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
      </Stack>
      {openDialog && (
        <StartCall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
}

export default Call;
