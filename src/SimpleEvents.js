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
        <div className="row">
          <form className="input-field col s6" onSubmit={this.handleSubmit}>
            <div className="input-field col s6">
              <input
                type="text"
                data-length="10"
                onChange={this.handleChange}
              />
              <button className="btn" onClick={this.handleClick}>
                Click Me!
              </button>
            </div>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}

export default SimpleEvents;
