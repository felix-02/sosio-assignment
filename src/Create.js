import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default function Create(props) {
  const history = useHistory();
  function helper(e) {
    props.setMessage(e.target.value);
  }
  function submit(e) {
    e.preventDefault();
    props.addToList(props.message);
    props.setMessage("");
    history.push("/");
  }
  return (
    <div className="App">
      <Grid
        container
        alignItems="center"
        spacing={10}
        className="grid-container"
      >
        <Grid item xs={12}>
          <form onSubmit={submit}>
            <h1>create your tweet</h1>
            <textarea
              className={props.message.length > 200 ? "error" : ""}
              value={props.message}
              onChange={helper}
              required
            />
            {"  "}
            <div>{props.message.length}/200</div>
            <br/>
            <div>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
