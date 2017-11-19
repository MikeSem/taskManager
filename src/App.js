import React, { Component } from 'react';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Lists: []
    };
  };
  addList = (text) => {
    var arr = this.state.Lists;
    arr.push({
              Name: text,
              tasks: []
            });
    this.setState({Lists: arr});
  };
  deleteList = (ind) => {
    var arr = this.state.Lists;
    arr.splice(ind, 1);
    this.setState({Lists: arr});
  };
  updateLists = (newName, ind) => {
    var arr = this.state.Lists;
    arr[ind].Name = newName;
    this.setState({Lists: arr});
  };
  updateTasks = (newTask, listInd, taskInd) => {
    var arr = this.state.Lists;
    arr[listInd].tasks[taskInd]=newTask;
    this.setState({Lists: arr});
  };
  removeTask = (listInd, taskInd) => {
    var arr = this.state.Lists;
    arr[listInd].tasks.splice(taskInd, 1);
    this.setState({Lists: arr});
  };
  newTask = (name, listInd) => {
    var arr = this.state.Lists;
    arr[listInd].tasks.push(name);
    this.setState({Lists: arr});
  };
  mvTaskR = (listInd, taskInd) => {
    var arr = this.state.Lists;
    var task = arr[listInd].tasks[taskInd];
    if(listInd<arr.length-1){
      this.removeTask(listInd, taskInd);
      this.newTask(task, listInd+1);
    }
  };
  mvTaskL = (listInd, taskInd) => {
    var arr = this.state.Lists;
    var task = arr[listInd].tasks[taskInd];
    if(listInd>0){
      this.removeTask(listInd, taskInd);
      this.newTask(task, listInd-1);
    }
  };
  render() {
    return (
      <div className='container'>
        {this.state.Lists.map((item, index)=>
          <List key={index}  index={index} update={this.updateLists} del={this.deleteList} updTask={this.updateTasks} rmvTask={this.removeTask} newTask={this.newTask} moveR={this.mvTaskR} moveL={this.mvTaskL}>
            {item}
          </List>
        )}
        <button type='button' onClick={this.addList.bind(null, 'New Task')} className='add-list'>Add List</button>
      </div>
    );
  }
}

export default App;
