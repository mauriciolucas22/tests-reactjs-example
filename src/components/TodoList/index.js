import React, { Component } from 'react';

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => <li key={todo.id}>{todo}</li>)}
      </ul>
    );
  }
};