import React from 'react'
import { ToDoItem } from "./ToDoItem";


export const ToDoList = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <ul>
            { todos.map(todo =>(
                <ToDoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
            )) }
        </ul>

    );
}



