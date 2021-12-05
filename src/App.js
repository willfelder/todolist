import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Rows from './components/Rows';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {

      userName: 'William',

      tasks: [
        {id: 1, action: 'Working in a project', done: false},
        {id: 2, action: 'Study Languages', done: false},
        {id: 3, action: 'Play Guitar', done: false},
      ],

      newTask: '',
    }

  }

  todoRows = () => this.state.tasks.map((value) => (
    <Rows key={value.id} value={value} callback={this.toggleDone} />
  ))

  toggleDone = (item) => {
    this.setState({
      tasks: this.state.tasks.map((value) => (
        value.action === item.action ? {...value, done: !value.done } : value
      ))
    })
  }

  updateValue = (event) => {
    this.setState({ newTask: event.target.value})
  } 

  addNewTask = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {id: Math.random(), action: this.state.newTask, done: false}
      ]
    })
  }

  render = () => {
    return(
      <div className="container">

        <div className="row">
          <Navbar name={this.state.userName} />
          <div className="col-12">
            <input 
              className="form-control" 
              value={this.state.newTask}
              onChange={this.updateValue} />
              <button className="btn btn-primary" onClick={this.addNewTask}>Add</button>
          </div>

          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Tasks</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>{this.todoRows()}</tbody>
            </table>
          </div>

        </div>
      </div>
    )
  }
}