import React from "react";
import { Divider } from "@material-ui/core";

import TweetList from "./TweetList";

export default function TweetCA(props) {
    return (
      <div className="App">
        <Divider variant="middle" />
        <h2>Recent tweets of the user about a topic goes here</h2>
        {props.list.map((item) => (
          <TweetList key={item.id} title={item.tweet} />
        ))}
        <Divider variant="middle" className="hr" />
      </div>
    );
}
