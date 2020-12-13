import React, { Component } from 'react';

class DataManager extends Component {
  state = {
    defaultValue: "",
    value: this.props.addItemValue
  }; //manipulate, add, update, delete from

  handleChange = (e) => {
    //update the local components
    this.setState({
      value: e.target.value
    })
  }
  
  clearInput = () => {
    //Clear existing value in input
    document.getElementById("itemValue").value = "";
    
    //Updaing local component state
    this.setState({value:""})
  }
  
  addItem = () => {
    //Call method reference in Todos component using props
    this.props.fooAddItem(this.state.value);
    this.clearInput();
  }
  
  render() {
      return(
        <div className = "input-group mb-3">
          <input type="text" className="form-control" id="itemValue" placeholder="Type In Your Todo Item Here"
            onChange = {this.handleChange} />
          <div className = "input-group-append">
            <button onClick = {this.addItem} className = "btn btn-outline-secondary" type = "button"
            id = "button-addon2"> Add New To-Do Item</button>
        </div>
      </div>
      ); //put out integreated html and data in here

  }

}

export default DataManager;
