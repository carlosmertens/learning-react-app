import React, { Component } from "react";

class StateInAction extends Component {
  constructor() {
    super();
    this.state = { text: "State inAction!" };
    // Only for testing
    setTimeout(() => {
      this.setState({ text: "Change state for Sanity Check!" });
    }, 2000);
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

export default StateInAction;
