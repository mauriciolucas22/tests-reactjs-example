import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TodosActions } from '../../store/ducks/todos';

class TodoList extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');

    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  };

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: 'New Todo' }
      ],
    });

    this.saveTodos();
  }

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });

    this.saveTodos();
  };

  render() {
    return (
      <Fragment>
        <ul>
          {
            this.state.todos.map(todo =>
              <li key={todo.id} onClick={() => this.removeTodo(todo.id)}>
                {todo}
              </li>
            )}
        </ul>
        <button onClick={this.addTodo}>Adicionar todo</button>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...TodosActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);