import React, { useState } from "react"
import { connect } from 'react-redux'
import { Input } from "./Input";
import { add } from '../actions/actions.js'

let List = ({ dispatch }) => {
    const [state, setState] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('SUBMIT')
        console.log(state)
        dispatch(add(state))
    }
    const handleChange = (event) => {
        setState(event.target.value)
        console.log('CHANGE')
        console.log(state)
    }

    return (
        <div>
            <Input addTodo={handleSubmit} createTodo={handleChange} />
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
