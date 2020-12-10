import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import styles from "./ContactList.module.css";
import "./ContactList.css";

function ContactList({ data, deleteContact }) {
  return (
    <TransitionGroup component="ul" className="contactList">
      {data.map((el, i) => {
        return (
          <CSSTransition key={i} timeout={250} classNames="contactListItem">
          <li className="contactListItem" key={el.id}>
            `${el.name} : ${el.number}$ `
            <button id={el.id} onClick={deleteContact}>
              delete
            </button>
          </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

export default ContactList;
