import React from "react";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

function MyDatePicker({ onDateChoose }) {
  const [value, setValue] = React.useState(new Date("2000-01-01T00:00:00"));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        toolbarTitle="When were you born?"
        openTo="year"
        orientation="portrait"
        disableFuture
        reduceAnimations
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        onAccept={() => onDateChoose(value)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default MyDatePicker;
