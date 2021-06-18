import React, { useState } from "react";
import { connect } from 'react-redux';
import { add, create } from '../actions/actions.js';
import store from '../index';
import { Input } from "./Input";
import ListElement from './ListElement.jsx'
import '../styles/list.css'

let List = ({ dispatch }) => {
    const [text, setText] = useState(null)
    const [number, setNumber] = useState(0)
    const [created, setCreated] = useState(false)

    let globalList = store ? store.getState().list : null;

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(add(number, text))
        console.log('SUBMIT', store.getState())
    }
    const handleChangeText = (event) => {
        setText(event.target.value)
    }
    const handleChangeNumber = (event) => {
        setNumber(event.target.value)
    }

    const handleCreateClick = (event) => {
        dispatch(create(true));
        setCreated(store.getState().created)
        console.log('CREATE', store.getState().created, created)
    }

    return (
        <div className="list">
            <Input addTodo={handleSubmit} addText={handleChangeText} addNumber={handleChangeNumber} />
            <p>YOUR LIST</p>
            {globalList ? globalList.map((line) => <ListElement number={line.number} text={line.text} id={line.id} key={line.id} />) : null}
            <button onClick={handleCreateClick} className="create-chart-button">Create chart</button>
            <button onClick={() => window.location.reload()} className="retry-button">Retry</button>
        </div>
    );
}

const mapStateToProps = state => {
    return { list: state.list, created: state.created }
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
