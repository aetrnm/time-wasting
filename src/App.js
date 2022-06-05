import React, { useState } from "react";
import Age from "./components/Age";
import { Box } from "@mui/system";
import MyDatePicker from "./components/MyDatePicker";
import { Typography } from "@mui/material";

function App() {
  const [dayOfBirth, setDayOfBirth] = useState(null);

  const afterChoice = (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3" gutterBottom component="div">
        The problem is that you think you have time
      </Typography>
      <Age dayOfBirth={dayOfBirth} />
      <Typography variant="h4" gutterBottom component="div">
        stop wasting your life
      </Typography>
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
