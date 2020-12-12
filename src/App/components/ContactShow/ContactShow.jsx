import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./ContactShow.css";

class ContactShow extends Component {
  state = {};

  deleteContact = (event) => {
    const id = event.target.dataset.id;
    this.props.globalStateControl({ id: id }, "DELETE");
  };

  componentDidUpdate() {
    this.contactList();
  }

  contactList = () => {
    let show = null;
    if (this.props.globalState.filter.length) {
      show = this.props.globalState.filter;
    } else {
      show = this.props.globalState.contacts;
    }
    return show.map((el, indx) => {
      return (
        <CSSTransition key={indx} timeout={250} classNames="contact-show-list-item">
        <li key={el.id} className="contact-show-list-item">
          <p className="contact-show-list-text">
            <span>{el.name}</span>
            <span>{el.number}</span>
          </p>
          <button data-id={el.id} onClick={this.deleteContact}>
            delete
          </button>
        </li>
        </CSSTransition>
      );
    });
  };

  render() {
    return (
      <div className="contact-show">
        {this.props.children}
        <TransitionGroup component="ul" className=".contact-show-list">
          {this.contactList()}
        </TransitionGroup>
      </div>
    );
  }
}

export default ContactShow;
