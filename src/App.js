import React, { Component } from 'react';
import './App.css';
import List from './List.js';
//import Names from './listNames.js';
/*var Names = [
  'To do',
  'In Progress',
  'Finished'
];*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Names: []
    };
  };
  addList = (text) => {
    var arr = this.state.Names;
    arr.push(text);
    this.setState({Names: arr});
  };
  deleteList = (ind) => {
    var arr = this.state.Names;
    arr.splice(ind, 1);
    this.setState({Names: arr});
  };
  updateLists = (newName, ind) =>{
    var arr = this.state.Names;
    arr[ind] = newName;
    this.setState({Names: arr});
  };
  render() {
    return (
      <div className='container'>
        {this.state.Names.map((item, index)=>
          <List key={index} index={index} update={this.updateLists} del={this.deleteList}>
            {item}
          </List>
        )}
        <button type='button' onClick={this.addList.bind(null, 'New Task')} className='add-list'>Add List</button>
      </div>
    );
  }
}

export default App;
