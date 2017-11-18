import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rename: false,
      tasks: []
    };
  };
  rename = () => {
    this.setState({rename: true});
  };
  delete = () => {
    this.props.del(this.props.index);
  };
  save = () => {
    this.props.update(this.refs.newName.value, this.props.index);
    this.setState ({rename: false})
  };
  updateTask = (newName, ind) => {
    var arr = this.state.tasks;
    arr[ind] = newName;
    this.setState({tasks: arr});
  };
  newTask = (name) => {
    var arr = this.state.tasks;
    arr.push(name);
    this.setState({tasks: arr});
  };
  deleteTask = (ind) => {
    var arr = this.state.tasks;
    arr.splice(ind, 1);
    this.setState({tasks: arr});
  };
  renderNorm = () => {
    return (
      <div className='list'>
        <div className='list-head'>
          <div className='list-name'>{this.props.children}</div>
          <button type="button" onClick={this.rename} className='list-btn'>Rename List</button>
          <button type="button" onClick={this.delete} className='list-btn'>Delete List</button>
        </div>
        {this.state.tasks.map((item, index) =>
          <ListItem key={index} index={index} update={this.updateTask} del={this.deleteTask}>{item}</ListItem>
        )}
        <button type='button' onClick={this.newTask.bind(null, 'New Task')} className='list-btn new-task'>New Task</button>
      </div>
    );
  };
  renderRename = () => {
    return (
      <div className='list'>
        <div className='list-head'>
          <textarea className='rename-box' ref='newName' defaultValue={this.props.children}></textarea>
          <button type="button" onClick={this.save} className='save-btn'>Save</button>
        </div>
        <button type='button' className='list-btn new-task'>New Task</button>
      </div>
    );
  };
  render(){
    if(this.state.rename){
      return this.renderRename();
    } else{
      return this.renderNorm();
    }
  }
}

export default List;
