import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class List extends Component {
  render() {
    return (
      <div className='list'>
        <div className='list-head'>
          <div className='list-name'>That's list name</div>
          <button type="button" className='list-btn'>Rename List</button>
          <button type="button" className='list-btn'>Delete List</button>
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
        <button type='button' className='list-btn new-task'>New Task</button>
      </div>
    );
  }
}

export default List;
