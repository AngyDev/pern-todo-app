import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

export default function ListTodo() {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const data = await response.json();

            setTodos(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            });

            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos && todos.map((todo, i) =>
                            <tr key={todo.todo_id}>
                                <td>{todo.description}</td>
                                <td>
                                    {/* <button className="btn">Edit</button> */}
                                    <EditTodo todo={todo}/>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </>
    )
}
