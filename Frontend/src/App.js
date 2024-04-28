// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import React from "react";
import MuiAlert from "@mui/material/Alert";
import ThemeSettings from "./components/settings";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "./redux/slice/app";

const vertical = "bottom";
const horizontal = "center";

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));


function App() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector(
    (state) => state.app.sanckbar
  );
  console.log(`message: ${message}\n open: ${open}`)
  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>
      {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}
          onClose={() => {
            console.log("This is clicked");
            dispatch(closeSnackbar());
          }}
        >
          <Alert
            onClose={() => {
              console.log("This is clicked");
              dispatch(closeSnackbar());
            }}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
      
    </>
  );
}

export default App;
