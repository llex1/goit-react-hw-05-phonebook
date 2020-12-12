import React, { Component } from "react";

import "./Filter.css";

class Filter extends Component {
  state = {
    value: "",
  };

  handleChange = async (event) => {
    await this.setState((state) => {
      return {
        value: event.target.value,
      };
    })
    this.props.globalStateControl({ name: this.state.value }, "FILTER");
  };

  render() {
    return (
      <div className="filter">
        <label htmlFor="filter">Filter</label>
        <input
          id="filter"
          type="text"
          name="filter"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
