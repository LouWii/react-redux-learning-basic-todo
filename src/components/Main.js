import React, { Component } from 'react';
import TodoList from './TodoList'
import '../styles/Main.css';

class Main extends Component {
  constructor(props) {
    super(props)
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this)
    this.clearCompletedTodos = this.clearCompletedTodos.bind(this)
  }
  handleTodoSubmit(e) {
    e.preventDefault()
    this.props.addTodo(this.refs.todoText.value)
    this.refs.todoText.value = ""
  }
  clearCompletedTodos(e) {
    this.props.clearCompletedTodos()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Learning React - Todo App</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h2>Add a todo</h2>
              <form className="add-todo" ref="todoForm" onSubmit={this.handleTodoSubmit} >
                <div className="input-group">
                  <input type="text" className="form-control" ref="todoText" placeholder="I need to..." />
                  <span className="input-group-btn">
                    <input className="btn btn-primary" type="button" value="Go!" />
                  </span>
                </div>
              </form>
              <p><button className="btn btn-default" onClick={this.clearCompletedTodos}>Clear completed todos</button></p>
            </div>
            <div className="col-sm-8">
              <h4 className="todo-count">Currently {this.props.todos.length} todos in the list ({this.props.todos.filter((todo) => todo.complete).length} completed)</h4>
              <TodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
