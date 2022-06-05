import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

function MyDatePicker({ onDateChoose }) {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        disableHighlightToday
        toolbarTitle="When were you born?"
        openTo="year"
        orientation="portrait"
        disableFuture
        reduceAnimations
        value={value}
        defaultCalendarMonth={new Date()}
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
