import React, { Component } from "react";

import "./Alert.css";

class Alert extends Component {
  state = {};

  render() {
    console.log(this.props, "RENDER from ALERT");
    return (
      <div className="alert">
        <p className="alert-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Alert;
