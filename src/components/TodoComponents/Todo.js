/*
<Todo /> is a component that takes in the todo data and displays the task to the screen.
 */

import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div
                className={`todo${this.props.todo.completed? ' completed' : ''}`} //className = todo completed || todo
                onClick={() => this.props.toggleComplete(this.props.todo.id)}
            >
                <p>{this.props.todo.task}</p>
            </div>
        );
    }
};

export default Todo;