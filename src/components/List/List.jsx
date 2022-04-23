import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from "./styles.js";

const List = () => {
  const classes = useStyles();
  const [type, setType] = useState("restaurant");
  const [ratting, setRatting] = useState("");

  return (
    <div className={classes.container}>
      <Typography variant="h4">Food & Dining around you</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="type">Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      {/* formcontrol for rating  */}
      <FormControl className={classes.formControl}>
        <InputLabel id="rating">Rating</InputLabel>
        <Select value={ratting} onChange={(e) => setRatting(e.target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3.0</MenuItem>
          <MenuItem value="4">Above 4.0</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default List;
