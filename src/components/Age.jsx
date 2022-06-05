import React, { useState } from "react";
import { differenceInMilliseconds } from "date-fns";
import { Paper, Typography } from "@mui/material";

function Age({ dayOfBirth }) {
  const [diff, setDiff] = useState(
    differenceInMilliseconds(new Date(), dayOfBirth)
  );
  setInterval(() => {
    setDiff(differenceInMilliseconds(new Date(), dayOfBirth));
  }, 100);
  return (
    <Paper elevation={8} sx={{ p: 4 }}>
      <Typography variant="h4" display="block" gutterBottom>
        Your age is: {(diff / 31556952000).toFixed(10)}
      </Typography>
    </Paper>
  );
}

export default Age;
