import React, {Component} from 'react';
// eslint-disable-next-line
import Item from './item';
import DataManager from'./dataManager';

class Items extends Component {

  state = {
    addItemValue: "",
    items : [
      {
        id:1,
        value: "todoooo1",
        isDone: false
      },
      {
        id:2,
        value: "todoooo2",
        isDone: false
      },
      {
        id:3,
        value: "todoooo3",
        isDone: false
      }
    ]

  }; //object,

  getTime(){
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  handleDelete = item => {
    const items = this.state.items.filter((t) => {
      return t.id !== item
    });
    this.setState({ items })
    //manipulate this.state.

  }

  handleDone = item => {
    const items = [...this.state.items];

    items.map((t) => {
      
        // eslint-disable-next-line
      if (t.id == item.id) {
        t.isDone = !t.isDone;
      }
      return t;
    });
    this.setState({ items })
    //when finished with update
  }

  addNewItem = item => {
    if (item) {
      const items = [...this.state.items];
      items.push (
        {
          id: this.getTime(),
          value: item,
          isDone: false
        }
      );
      this.setState({ addItemValue: "", items})
    }else {
      console.log("Please Add Todo List Item")
    }
  }

  render(){
    return (
        <table className = "table">
        <tbody>
        {this.state.items.map((item,index) => (
              <tr key = {item.id}>
                <Item index = {index + 1} item = {item} fooDelete = {this.handleDelete} fooDoneDone = {this.handleDone} />
              </tr>
          ))}
          <tr>
            <td colSpan = "4" className = "text-center">
              <DataManager fooAddItem = {this.addNewItem}
                addItemValue = {this.state.addItemValue} />
            </td>
          </tr>
        </tbody>
        </table>
    );
  }

}

export default Items;
