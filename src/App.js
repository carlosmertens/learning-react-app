import React from "react";
import "./App.css";
import SimpleEvents from "./SimpleEvents";
import EventAndState from "./EventAndState";
import StateInAction from "./StateInAction";
import StatePractice from "./StatePractice";
import CardSet from "./CardSet";
import cards from "./cards";

function App() {
  return (
    <div className="App">
      <SimpleEvents />
      <EventAndState />
      <StateInAction />
      <StatePractice />
      <div className="row">
        <CardSet cards={cards} />
      </div>
    </div>
  );
}

export default App;
