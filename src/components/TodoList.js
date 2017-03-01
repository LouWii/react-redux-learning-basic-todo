import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';

class TodoList extends React.Component {

  render() {
    return (
      <div className="TodoList">
        {this.props.todos.map((todo, idx) => <Todo key={idx} todo={todo} id={idx} />)}
      </div>
    );
  }
}

export default TodoList;
