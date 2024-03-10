import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Phone,
  PhoneCall,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/slice/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

function Contact() {
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
            justifyContent={"space-between"}
            space={3}
            alignItems={"center"}
          >
            <Typography> Contact Info</Typography>
            <IconButton>
              <X
                onClick={() => {
                  dispatch(toggleSidebar());
                }}
              />
            </IconButton>
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
          spacing={2}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />

            <Stack spacing={0.5} direction={"column"}>
              <Typography variant="article" fontWeight={500}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="article" fontWeight={400}>
                {"+91 8250661236"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack direction={"column"} spacing={1} alignItems={"center"}>
              <VideoCamera size={21} />
              <Typography variant="overline" fontWeight={400}>
                {"Audio"}
              </Typography>
            </Stack>
            <Stack direction={"column"} spacing={1} alignItems={"center"}>
              <Phone size={24} />
              <Typography variant="overline" fontWeight={400}>
                {"Voice"}
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction={"column"} spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Hi There, I am useSettings</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, link and docs</Typography>
            <Stack spacing={0.4} direction={"row"} alignItems={"center"}>
              <Button endIcon={<CaretRight />}>201</Button>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Star size={21} />
              <Typography>Starred Messages</Typography>
            </Stack>
            <Stack>
              <IconButton>
                <CaretRight />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Bell size={21} />
              <Typography>Mute Notification</Typography>
            </Stack>
            <Stack>
              <IconButton>
                <AntSwitch />
              </IconButton>
            </Stack>
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack direction={"column"} alignItems={"center"} spacing={0.5}>
              <Typography variant="subtitle2">Coding Mongd</Typography>
              <Typography variant="caption">Owl, Parrot, Rabbit</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button startIcon={<Prohibit/>} fullWidth variant="outlined">Block</Button>
            <Button startIcon={<Trash/>} fullWidth variant="outlined">Delete</Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Contact;
