import React from 'react'

export const ToDoItem = ({todo, toggleComplete, removeTodo}) => {

    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div>
            <input onClick={handleCheckboxClick} type="checkbox"/>
            <li
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
                className="list-item">
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}>Remove</button>
        </div>
    );
}



