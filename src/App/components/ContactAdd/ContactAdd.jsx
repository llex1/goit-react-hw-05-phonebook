import React, { Component } from "react";
import { v4 } from 'uuid';
import styles from './ContactAdd.module.css'

class ContactAdd extends Component {
  state = {
    valueName: "",
    valueNumder: "",
  };
  formControl = (event) => {
    switch (event.target.name) {
      case "name":
        this.setState((state) => {
          return {
            valueName: event.target.value,
          };
        });
        break;
      case "number":
        this.setState((state) => {
          return {
            valueNumder: event.target.value,
          };
        });
        break;
      default:
        console.log("error form-name");
    }
  };
  formSubmit = (event) => {
    event.preventDefault();
    const objOut = 
      {
        id: v4(),
        name: this.state.valueName,
        number: this.state.valueNumder,
      };
    this.props.globalStateControl(objOut, "ADD");
    this.setState((state) => {
      return {
        valueName: "",
        valueNumder: "",
      };
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.formSubmit}>
        <label className={styles.label} htmlFor="name">Contact Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          value={this.state.valueName}
          onChange={this.formControl}
        />
        <label className={styles.label} htmlFor="number">Contact Number</label>
        <input
          className={styles.input}
          type="text"
          name="number"
          id="number"
          value={this.state.valueNumder}
          onChange={this.formControl}
        />
        <button className={styles.btn} type="submit">new contact</button>
      </form>
    );
  }
}

export default ContactAdd;
