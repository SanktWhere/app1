import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillUnmount() {
    console.log("11ыв");
   }
  
   componentDidMount() {
    console.log("встроен");
   }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          1To get started, edit <code>src/App.js</code> and save to reload.
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, edit <code>src/App.js</code> and save to reload.
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, edit <code>src/App.js</code> and save to reload.
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, edit <code>src/App.js</code> and save to reload.
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, edit <code>src/App.js</code> and save to reload.
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, edit <code>src/App.js</code> and save to reload.
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
          To get started, editTo get started, editTo get started, edit
        </p>
      </div>
    );
  }
}

export default App;
