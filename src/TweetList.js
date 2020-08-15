import React from "react";
import { Grid } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import "./styles.css";

export default function TweetList(props) {
  return (
    <Grid container alignItems="center" spacing={10} className="grid-container">
      <Grid item xs={3}>
        <img src="https://source.unsplash.com/random/100x100" alt="img" />
      </Grid>
      <Grid item xs={9} style={{textAlign:'left'}}>
        <p style={{color:'gray'}}>{props.title}</p>
      </Grid>
    </Grid>
  );
}
