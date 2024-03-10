import React from "react";
import { Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat header */}
      <Header />

      {/* Msg */}
      <Message menu={true}/>

      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
