import React from 'react';

function ListElement (props) {
    return (
        <p>Name: {props.text} --{'>'} (X, Y) = ({props.id}, {props.number})</p>
    );
}

export default ListElement;