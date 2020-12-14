const localStorageControl = function(boolen) {
  if(!boolen && localStorage.getItem('contacts')){
    this.setState((state) => {
      return {
        contacts: [...JSON.parse(localStorage.getItem('contacts'))],
      };
    });
  }
  if(boolen){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

}

export default localStorageControl;


