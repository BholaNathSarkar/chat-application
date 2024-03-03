import React from "react";
import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
      <Header />

      {/* Msg */}
      <Message />

      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
