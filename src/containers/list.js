/* import { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../components/list';

const mapStateToProps = state => {
    return { list: state.list }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch({ type: 'ADD' },)
    }
}

const createConnection = connect(
    mapStateToProps,
    mapDispatchToProps
)

const ComponentWithConnectionToRedux = createConnection(List)

export default ComponentWithConnectionToRedux; */