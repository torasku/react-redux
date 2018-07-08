import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/addTodo.jsx';
import VisibleTodoList from './containers/visibleTodoList';

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
