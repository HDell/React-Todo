/*
<App /> will hold all the data needed for this project. It will also be the container for your Todo Components.
All of your application data will be stored here on <App />.
All of your handler functions should live here on <App />.
 */

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.

  constructor() {
    super();
    // initialize the state object
    this.state = {
      todoList: todos
    };

    // this.toggleItem = this.toggleItem.bind(this)
  }

  toggleComplete = (id) => {
    this.setState({
      todoList: this.state.todoList.map((elem) => {
        if (elem.id === id) {
          return {
            ...elem,
            completed: !elem.completed
          } //return
        } else {
          return elem;
        } //...else
      }) //map
    }) //setState
  };

  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = (taskName) => {
    const newTodo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter((elem) => !elem.completed)
    })
  };

  render() {
    return (
      <div className="main-app">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoList} toggleComplete={this.toggleComplete}/>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
