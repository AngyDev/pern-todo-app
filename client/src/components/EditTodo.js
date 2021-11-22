import React, { useState } from 'react';

export default function EditTodo({ todo }) {

    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = {description};
            const updateDescription = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                Edit
            </button>

            <div className="modal" id={`id${todo.todo_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
