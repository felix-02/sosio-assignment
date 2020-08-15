import React, { useState, Fragment } from "react";
import Header from "./Header";
import Tweetcase from "./Tweetcase";
import { Route, Switch } from "react-router-dom";
import Create from "./Create";
import "./styles.css";
import Container from "@material-ui/core/Container";

export default function App() {
  const [message, setMessage] = useState("");
  const [list, setList] = useState([
    { id: Math.random(), tweet: "use our built in widgets" },
    { id: Math.random(), tweet: "or upload your own images" },
    {
      id: Math.random(),
      tweet: "copy and paste,undo and redo with familiar keyboard shortcuts",
    },
  ]);

  const addToList = (tweet) => {
    setList((prev) => [...prev, { id: Math.random(), tweet }]);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Container maxWidth="md">
            <Header user="User Name" bio="User Bio lorem ipsum" />
            <Tweetcase list={list} />
          </Container>
        </Route>
        <Route path="/create">
          <Create
            message={message}
            list={list}
            addToList={addToList}
            setMessage={setMessage}
          />
        </Route>
      </Switch>
    </div>
  );
}
