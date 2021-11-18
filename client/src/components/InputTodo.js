import React from 'react';

export default function InputTodo() {
    return (
        <>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form>
                <input type="text" className="form-control" />
                <button>Add</button>
            </form>
        </>
    )
}
