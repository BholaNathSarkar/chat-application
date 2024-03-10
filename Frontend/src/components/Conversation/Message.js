import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  TimeLine,
  TestMsg,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./MessageType";

const Message = ({ menu }) => {
  return (
    <Box
      p={3}
      width={"100%"}
      sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
    >
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} menu={menu} />;
                case "doc":
                  return <DocMsg el={el} menu={menu} />;
                case "link":
                  return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  return <ReplyMsg el={el} menu={menu} />;
                default:
                  return <TestMsg el={el} menu={menu} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
