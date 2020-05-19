import React, { Component } from "react";

class StateInAction extends Component {
  constructor() {
    super();
    this.state = { text: "State inAction!" };
    // Only for testing, this will be considered a bug by React
    setTimeout(() => {
      this.setState({ text: "Change state for Sanity Check!" });
    }, 2000);
  }

  render() {
    return (
      <div>
        <h3>3. StateInAction Component</h3>
        <h1>{this.state.text}</h1>
        <hr />
      </div>
    );
  }
}

export default StateInAction;
