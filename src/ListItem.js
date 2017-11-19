import React, { Component } from 'react';
import './App.css';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state={
      edit: false,
    };
  };
  prev = () => {
    this.props.moveL(this.props.index);
  };
  edit = () => {
    this.setState({edit: true});
  };
  next = () => {
    this.props.moveR(this.props.index);
  };
  save = () => {
    this.props.update(this.refs.newName.value, this.props.index);
    this.setState({edit: false});
  };
  delete = (ind) => {
    this.setState({edit: false});
    this.props.del(this.props.index);
  };
  renderNorm = () => {
    return (
      <div className='task'>
        <p className='task-name'>{this.props.children}</p>
        <button type="button" onClick={this.prev} className='task-btn'>To Prev List</button>
        <button type="button" onClick={this.edit} className='task-btn'>Edit task</button>
        <button type="button" onClick={this.next} className='task-btn'>To Next List</button>
      </div>
    );
  };
  renderEdit = () => {
    return (
      <div className='task'>
        <textarea ref='newName' className='rename-box' defaultValue={this.props.children}></textarea>
          <button type="button" onClick={this.save} className='save-btn'>Save</button>
          <button type="button" del={this.delete.bind(null, this.props.index)} onClick={this.delete} className='remove-btn'>Remove task</button>
      </div>
    );
  };
  render() {
    if(this.state.edit){
      return this.renderEdit();
    } else{
      return this.renderNorm();
    }
  }
}

export default ListItem;
