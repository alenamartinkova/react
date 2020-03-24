import React, {useState} from 'react'
import uuid from "react-uuid";

export const ToDoInput = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (todo.task.trim()) {
            addTodo({...todo, id: uuid()});
            // reset task input
            setTodo({...todo, task: ""});
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Add a To-Do"
                        onChange={handleTaskInputChange}
                        value={todo.task}
                    />
                </div>
                <button type="Submit" className="btn btn-block btn-primary">Add item</button>
            </form>
        </div>
    );
}



