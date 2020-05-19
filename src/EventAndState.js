import React, { Component } from "react";

class EventAndState extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  handleClick = () => {
    this.setState({ inputText: "" });
    console.log("Click test");
  };

  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
    console.log(this.state.inputText);
  };

  handleSubmit = (event) => {
    this.setState({ inputText: "We handled submit" });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>2. EventAndState Component</h3>
        <p>{this.state.inputText}</p>
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

export default EventAndState;
