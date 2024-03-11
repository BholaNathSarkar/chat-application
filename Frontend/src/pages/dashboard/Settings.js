import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
  Bell,
} from "phosphor-react";
import { faker } from "@faker-js/faker";
import ShortcutDialog from "../../sections/Settings/Shortcuts";

function Settings() {
  const [openShortcuts, setOpenShortcuts] = useState(false);
  const handleOpenShortcuts = () => {
    console.log("1");
    setOpenShortcuts(true);
  };
  const handleCloseShortcuts = () => {
    console.log("2");
    setOpenShortcuts(false);
  };

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onClick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onClick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onClick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onClick: handleOpenShortcuts,
      // onClick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onClick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onClick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shotcuts",
      onClick: handleOpenShortcuts,
      // onClick: () => {},
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onClick: () => {},
    },
  ];
  const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ with: "100%" }}>
        {/* Left Panal */}
        <Box
          sx={{
            overflow: "scroll",
            height: "100vh",
            position: "relative",
            width: 320,
            backgroundColor:
              theme.palette.mode === "Light"
                ? "#F8FAFF"
                : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header  */}
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <IconButton>
                <CaretLeft size={24} color="#4B4B4B" />
              </IconButton>
              <Typography variant="h6">Settings</Typography>
            </Stack>

            {/* Profile section */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <Avatar
                sx={{ width: "75px", height: "75px" }}
                src={faker.image.avatar()}
                alt={faker.name.fullName()}
              />

              <Stack spacing={0.5} direction={"column"} alignItems={"center"}>
                <Typography variant="article">
                  {faker.name.fullName()}
                </Typography>
                <Typography variant="subtitle">
                  {faker.random.words()}
                </Typography>
              </Stack>
            </Stack>
            {/* List of options */}
            <Stack spacing={4}>
              {list.map(({ key, icon, title, onClick }) => (
                <>
                  <Stack
                    spacing={2}
                    sx={{ cursor: "pointer" }}
                    onClick={onClick}
                  >
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      {icon}
                      <Typography variant="bod2y">{title}</Typography>
                    </Stack>
                    {key !== 7 && <Divider />}
                  </Stack>
                </>
              ))}
            </Stack>
          </Stack>
        </Box>
        {/* Right Panal */}
      </Stack>
      {openShortcuts && (
        <ShortcutDialog open={openShortcuts} handelClose={handleCloseShortcuts} />
      )}
    </>
  );
}

export default Settings;
