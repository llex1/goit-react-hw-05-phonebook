import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

//jsx module
import Alert from "./components/Alert";
import Header from "./components/Header";
import ContactAdd from "./components/ContactAdd";
import ContactShow from "./components/ContactShow";
import Filter from "./components/Filter";

//style
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    alert: false,
    alertMessage: "",
  };
  
  delayToCloseAlert = null;

  globalStateControl = ({ id, name, number }, marker) => {
    switch (marker) {
      case "ADD":
        if (name && this.state.contacts.map((el) => el.name).includes(name)) {
          this.setState((state) => {
            return {
              alert: true,
              alertMessage: "Excuse, but You already have this contact in your base.",
            };
          });
          clearTimeout(this.delayToCloseAlert);
          this.delayToCloseAlert = setTimeout(() => {
            this.setState((state) => {
              return {
                alert: false,
                alertMessage: "",
              };
            })
          }, 3000);
        } else if (name) {
          this.setState((state) => {
            return {
              contacts: [...state.contacts, { id, name, number }],
            };
          });
        }
        break;
      case "DELETE":
        if (this.state.filter.length) {
          let idx = 0;
          this.state.filter.forEach((el, index) => {
            if (el.id === id) {
              idx = index;
            }
          });
          const newFilters = [...this.state.filter];
          newFilters.splice(idx, 1);
          this.setState((state) => {
            return {
              filter: [...newFilters],
            };
          });
        }
        let idx = 0;
        this.state.contacts.forEach((el, index) => {
          if (el.id === id) {
            idx = index;
          }
        });
        const newContacts = [...this.state.contacts];
        newContacts.splice(idx, 1);
        this.setState((state) => {
          return {
            contacts: [...newContacts],
          };
        });
        break;
      case "FILTER":
        const filter = [];
        if (name) {
          this.state.contacts.forEach((el) => {
            if (el.name.includes(name)) {
              filter.push(el);
            }
            return {
              filter,
            };
          });
          this.setState((state) => {
            return {
              filter: [...filter],
            };
          });
        } else {
          this.setState((state) => {
            return {
              filter: [...filter],
            };
          });
        }
        break;
      default:
        console.log("can't parth marker");
    }
  };

  render() {
    return (
      <div className="phonebook">
        <CSSTransition
          in={this.state.alert}
          classNames="alert"
          timeout={300}
          unmountOnExit
        >
          <Alert text={this.state.alertMessage} />
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          classNames="header"
          timeout={500}
          unmountOnExit
        >
          <Header />
        </CSSTransition>
        <ContactAdd globalStateControl={this.globalStateControl} />
        <ContactShow
          globalStateControl={this.globalStateControl}
          globalState={this.state}
        >
          <CSSTransition
            in={this.state.contacts.length > 1}
            classNames="filter"
            timeout={250}
            unmountOnExit
          >
            <Filter globalStateControl={this.globalStateControl} />
          </CSSTransition>
        </ContactShow>
      </div>
    );
  }
}

export default App;
