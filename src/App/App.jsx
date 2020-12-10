import React, { Fragment, Component } from "react";
import {CSSTransition} from "react-transition-group"
import { v4 as uuid } from "uuid";

//jsx modules
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

//states
import phoneBookState from "./data/phoneBook";

// css
import "./App.css";

class App extends Component {
  state = phoneBookState;

  componentDidMount() {
    this.setState((state) => {
      if (localStorage.getItem("contacts")) {
        return {
          contacts: [...JSON.parse(localStorage.getItem("contacts"))],
        };
      } else {
        return {
          contacts: [],
        };
      }
    });
  }
  componentDidUpdate() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  addContact = (event) => {
    event.preventDefault();
    const currentContacts = this.state.contacts.map((el) => el.name);
    if (currentContacts.includes(event.target.contactName.value)) {
      this.setState((state)=>{
        return {
          alert: true
        }
      })
      setTimeout(()=>{
        this.setState((state)=>{
          return {
            alert: false
          }
        })
      }, 4000)
      // alert("Такий контакт вже існує!");
    } else {
      this.setState((state) => {
        const newContact = [
          {
            id: uuid(),
            name: event.target.contactName.value,
            number: event.target.contactNumber.value,
          },
        ];
        return {
          contacts: [...state.contacts, ...newContact],
        };
      });
    }
  };
  deleteContact = (event) => {
    const findElement = this.state.contacts.filter(
      (el) => el.id === event.target.id
    );
    const indexOfFindElement = this.state.contacts.indexOf(findElement[0]);
    const newContactArray = [...this.state.contacts];
    newContactArray.splice(indexOfFindElement, 1);
    this.setState((state) => {
      return {
        contacts: [...newContactArray],
      };
    });
    //аналогічно для фільтра, якщо він не пустий
    if (this.state.filter.length) {
      const findElement_F = this.state.filter.filter(
        (el) => el.id === event.target.id
      );
      const indexOfFindElement_F = this.state.filter.indexOf(findElement_F[0]);
      const newContactArray_F = [...this.state.filter];
      newContactArray_F.splice(indexOfFindElement_F, 1);
      this.setState((state) => {
        return {
          filter: [...newContactArray_F],
        };
      });
    }
  };

  filterContact = (inputValue) => {
    const filterElement = this.state.contacts.filter((el) =>
      el.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    if (inputValue && !Object.keys(filterElement).length) {
      this.setState((state) => {
        return {
          filter: -1,
        };
      });
    } else {
      this.setState((state) => {
        return {
          filter: [...filterElement],
        };
      });
    }
  };

  render() {
    let dataOut;
    if (typeof this.state.filter === "number") {
      dataOut = <p className="filterAlert">пошук не дав результатів</p>;
    } else {
      dataOut = (
        <ContactList
          data={
            this.state.filter.length > 0
              ? this.state.filter
              : this.state.contacts
          }
          deleteContact={this.deleteContact}
        />
      );
    }

    return (
      <Fragment>
        <CSSTransition in={true} appear={true} classNames="logo" timeout={500} unmountOnExit>
        <h1>Phonebook</h1>
        </CSSTransition>
        <CSSTransition in={this.state.alert}  classNames="alert" timeout={250} unmountOnExit>
        <div className="alert">Такий контакт вже існує!</div>
        </CSSTransition>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filterContact={this.filterContact} />
        {dataOut}
      </Fragment>
    );
  }
}

export default App;
