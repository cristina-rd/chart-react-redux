import React, { useState } from "react";
import { connect } from 'react-redux';
import store from '../index';
import { Input } from "./Input";
import ListElement from './ListElement.jsx'
import { add } from '../actions/actions.js';

let List = ({ dispatch }) => {
    const [text, setText] = useState(null)
    const [number, setNumber] = useState(0)

    let globalList = store ? store.getState().list : null;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(add(number, text))
    }
    const handleChangeText = (event) => {
        setText(event.target.value)
    }
    const handleChangeNumber = (event) => {
        setNumber(event.target.value)
    }

    return (
        <div>
            <Input addTodo={handleSubmit} addText={handleChangeText} addNumber={handleChangeNumber}/>
            {globalList ? globalList.map((line)=> <ListElement number={line.number} text={line.text} id={line.id} key={line.id} />) : null}
        </div>
    );
}

const mapStateToProps = state => {
    return { list: state.list }
}

const todoList = connect(mapStateToProps)(List)
export default todoList
/* 

const mapDispatchToProps = { add }


const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(List)

export default ComponentWithConnectionToRedux; */
