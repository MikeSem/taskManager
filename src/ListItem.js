import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListItem extends Component {
  render() {
    return (
      <div className='task'>
        <p className='task-name'>Task</p>
        <button type="button" className='move-task-l'>To Prev List</button>
        <button type="button" className='move-task-r'>To Next List</button>
      </div>
    );
  }
}

export default ListItem;
