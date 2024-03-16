import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyleBaseInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    // border: "none",
    // outline: "none",
    // backgroundColor: "transparent",
  },
}));

export default StyleBaseInput;
