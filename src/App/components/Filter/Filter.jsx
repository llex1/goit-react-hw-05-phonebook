import React, { Component } from "react";

import "./Filter.css";

class Filter extends Component {
  state = {
    value: "",
  };

  formControl = (event) => {
    this.setState((state) => {
      return {
        value: event.target.value,
      };
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.value);
    if (this.state.value !== prevState.value) {
      this.props.globalStateControl({ name: this.state.value }, "FILTER");
    }
  }

  render() {
    return (
      <div className="filter">
        <label htmlFor="filter">Filter</label>
        <input
          id="filter"
          type="text"
          name="filter"
          value={this.state.value}
          onChange={this.formControl}
        />
      </div>
    );
  }
}

export default Filter;
