import React, { Component } from "react";

class SimpleEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
    console.log("Click test");
  }

  handleChange() {
    console.log("Typing...");
  }

  handleSubmit(event) {
    console.log("Handle Submit!");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>1. SimpleEvents Component</h3>
        <form onSubmit={this.handleSubmit}>
          <button className="btn" onClick={this.handleClick}>
            Click Me!
          </button>
          <input onChange={this.handleChange} />
        </form>
        <hr />
      </div>
    );
  }
}

export default SimpleEvents;
