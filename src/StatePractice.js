import React, { Component } from "react";

class StatePractice extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "", imageWidth: "" };
  }

  handleOnFocus = (event) => {
    this.setState({
      message: "By filling the form, you agree to the site term of service!",
    });
  };

  handleOnMouse = () => {
    this.setState({ message: "" });
  };

  handleSize = (event) => {
    console.dir(event.target);
    if (event.target.width > 100) {
      console.log("Your image is too big!");
    }
  };

  render() {
    return (
      <div>
        <h3>4. StatePractice Component</h3>
        <input onFocus={this.handleOnFocus} type="text" />
        <h3 onMouseEnter={this.handleOnMouse}>{this.state.message}</h3>

        <div>
          <img
            onLoad={this.handleSize}
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt=""
          />
        </div>
        <hr />
      </div>
    );
  }
}

export default StatePractice;
