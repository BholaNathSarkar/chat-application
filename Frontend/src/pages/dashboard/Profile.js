import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import ProfileForm from "../../sections/Settings/ProfileForm";

function Profile() {
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left part */}
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
          <Stack p={2} spacing={3} sx={{ width: "100%" }}>
            {/* Header part */}
            <Stack spacing={3} direction={"row"} alignItems={"center"}>
              <IconButton>
                <CaretLeft size={30} color="#4B4B4B" />
              </IconButton>
              <Typography variant="h3">Profile</Typography>
            </Stack>

            {/* Profile form */}

            <ProfileForm />
            {/* <Box sx={{ justifyContent: "center" }}>
              <Stack>
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                  style={{ width: 120, height: 120 }}
                />
              </Stack>
            </Box> */}
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Profile;
