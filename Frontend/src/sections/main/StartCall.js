import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyleBaseInput,
} from "../../components/search";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallElement";
import { MemberList } from "../../data";

// Transition component for the Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function StartCall({ open, handleClose }) {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>
          <Typography variant="body">Start Call</Typography>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
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
            {/* Call list */}
            {MemberList.map((el) => (
              <CallElement {...el} />
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default StartCall;
