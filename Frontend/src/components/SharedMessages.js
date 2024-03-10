import { useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import { ArrowLeft } from "phosphor-react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slice/app";
import { faker } from "@faker-js/faker";
import { SHARED_DOC, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MessageType";

function SharedMessages() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <Typography variant="subtitle2">Shared Mesages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          p={2}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid container spacing={2}>
                    {[0, 1, 2, 3, 4, 5, 6].map((el) => {
                      return (
                        <Grid item xs={4}>
                          <img
                            src={faker.image.avatar()}
                            alt={faker.name.firstName()}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                );
              case 1:
                return SHARED_LINKS.map((el) => {
                  return <LinkMsg el={el} />;
                });
              case 2:
                return SHARED_DOC.map((el) => {
                  return <DocMsg el={el} />;
                });
              default:
                return null;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
}

export default SharedMessages;
