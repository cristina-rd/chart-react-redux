import React from 'react';

export function Input(props) {
    return (
        <form onSubmit={props.addTodo}>
            <label htmlFor='number'>Y NUMBER</label>
            <input type='number' id='number' onChange={props.addNumber}/>

            <label htmlFor='text'>TEXT</label>
            <input type='text' id='text' onChange={props.addText}/>
            
            <button>Add</button>
        </form>
    )
}