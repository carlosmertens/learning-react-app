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
    this.setState({ inputText: "Your feedback has been submitted!" });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>2. EventAndState Component</h3>
        <div className="row">
          <p>{this.state.inputText}</p>
          <form className="input-field col s6" onSubmit={this.handleSubmit}>
            <input type="text" data-length="10" onChange={this.handleChange} />
            <button className="btn" onClick={this.handleClick}>
              Submit!
            </button>
          </form>
        </div>
        <hr />
      </div>
    );
  }
}

export default EventAndState;
