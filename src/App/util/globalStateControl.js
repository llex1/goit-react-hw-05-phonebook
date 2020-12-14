const globalStateControl = function({ id, name, number }, marker){
  switch (marker) {
    case "ADD":
      if (name && this.state.contacts.map((el) => el.name).includes(name)) {
        this.setState((state) => {
          return {
            alert: true,
            alertMessage: "Sorry, but You already have this contact in your base.",
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


export default globalStateControl;