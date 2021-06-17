import React from 'react';

export function Input(props) {
    return (
        <form onSubmit={props.addTodo}>
            <input type='text' id='input' onChange={props.createTodo}/>
            <button>Add</button>
        </form>
    )
}