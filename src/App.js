import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <List />
        <List />
        <List />
        <List />
      </div>
    );
  }
}

export default App;
