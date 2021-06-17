import React from 'react';

export function Input(props) {
    return (
        <form onSubmit={props.addTodo}>
            <input type='number' id='number' onChange={props.addNumber}/>
            <input type='text' id='text' onChange={props.addText}/>
            <button>Add</button>
        </form>
    )
}