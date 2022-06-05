import React, { useState } from "react";
import Age from "./components/Age";
import MyDatePicker from "./components/MyDatePicker";
import { Box, ThemeProvider } from "@mui/system";
import { Typography } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [dayOfBirth, setDayOfBirth] = useState(null);

  const afterChoice = (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h3" gutterBottom component="div">
          The problem is that you think you have time
        </Typography>
        <Age dayOfBirth={dayOfBirth} />
        <Typography
          sx={{ mt: 2 }}
          variant="button"
          gutterBottom
          component="div"
        >
          stop wasting your life.
        </Typography>
      </ThemeProvider>
    </Box>
  );

  const beforeChoice = <MyDatePicker onDateChoose={setDayOfBirth} />;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {dayOfBirth ? afterChoice : beforeChoice}
    </Box>
  );
}

export default App;
