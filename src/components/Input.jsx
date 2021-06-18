import React from 'react';

export function Input(props) {
    return (
        <form onSubmit={props.addTodo}>
            <div className="add-inputs">
                <label htmlFor='number'>Y AXIS <small>(Only a number)</small></label>
                <input type='number' id='number' onChange={props.addNumber} />

                <label htmlFor='text'>NAME</label>
                <input type='text' id='text' onChange={props.addText} />
            </div>
            <button className="add-button">Add</button>
        </form>
    )
}