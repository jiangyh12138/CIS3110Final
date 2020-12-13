import React, { Component } from 'react';
import './App.css';
import Items from './Components/items';

class App extends Component {

  render() {
  return (
    <div className="container">
    <h1 className="text-center">Simple ToDo List System</h1>
    <Items />
    </div>
    );
  }
}

export default App;
