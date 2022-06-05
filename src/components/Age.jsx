import React, { useState } from "react";
import { differenceInMilliseconds } from "date-fns";
import { Typography } from "@mui/material";

function Age({ dayOfBirth }) {
  const [diff, setDiff] = useState(
    differenceInMilliseconds(new Date(), dayOfBirth)
  );
  setInterval(() => {
    setDiff(differenceInMilliseconds(new Date(), dayOfBirth));
  }, 100);
  return (
    <Typography variant="subtitle1" display="block" gutterBottom>
      Your age is: {(diff / 31556952000).toFixed(10)}
    </Typography>
  );
}

export default Age;
