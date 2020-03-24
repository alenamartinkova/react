import React, {useEffect, useState} from 'react';
import './App.css';
import { ToDoInput } from './components/ToDoInput'
import { ToDoList } from './components/ToDoList'

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function toggleComplete(id) {
        setTodos(
          todos.map(todo => {
              if (todo.id === id) {
                  return {
                      ...todo,
                      completed: !todo.completed
                  };
              }
              return todo;
          })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

  return (
    <div className="App">
        <h3>To Do Shit</h3>
        <ToDoInput addTodo={addTodo}/>
        <ToDoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
