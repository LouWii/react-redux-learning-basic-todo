import React, { Component } from 'react';
import TodoList from './TodoList'
import '../styles/Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Learning React - Todo App</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
            </div>
            <div className="col-sm-8">
              <h4 className="todo-count">Currently {this.props.todos.length} todos in the list ({this.props.todos.filter((todo) => todo.complete).length} completed)</h4>
              <TodoList todos={this.props.todos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
