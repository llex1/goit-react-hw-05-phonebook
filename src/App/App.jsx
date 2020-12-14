import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

//js util
import globalStateControl from './util/globalStateControl';
import localStorageControl from './util/localStorageControl';

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
  
  componentDidMount(){
    localStorageControl.call(this)
  }
  componentDidUpdate(){
    localStorageControl.call(this, true)
  }

  render() {
    return (
      <div className="phonebook">
        <CSSTransition
          in={this.state.alert}
          classNames="alert"
          timeout={250}
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
        <ContactAdd globalStateControl={globalStateControl.bind(this)} />
        <ContactShow
          globalStateControl={globalStateControl.bind(this)}
          globalState={this.state}
        >
          <CSSTransition
            in={this.state.contacts.length > 1}
            classNames="filter"
            timeout={250}
            unmountOnExit
          >
            <Filter globalStateControl={globalStateControl.bind(this)} />
          </CSSTransition>
        </ContactShow>
      </div>
    );
  }
}

export default App;
