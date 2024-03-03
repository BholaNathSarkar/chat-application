import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { TimeLine, TestMsg, MediaMsg } from "./MessageType";
import { SimpleBarStyle } from "../Scrollbar";

function Message() {
  return (
    <Box p={3} width={"100%"} sx={{ flexGrow: 1, overflowY: "auto" }}>
    
      <Stack spacing={3}>
      
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el}/>;
                case "doc":
                  // document
                  break;
                case "link":
                  // Links
                  break;
                case "reply":
                  // reply
                  break;
                default:
                  return <TestMsg el={el} />;
              }

              break;

            default:
              return <></>;
          }
        })}
       
      </Stack>
      
    </Box>
  );
}

export default Message;
