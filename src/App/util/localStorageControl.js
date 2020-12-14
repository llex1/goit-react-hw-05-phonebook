const localStorageControl = function(boolen) {
  console.log(boolen, 'boolens');
  console.log(this.state.contacts, 'THISSTATE');
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


