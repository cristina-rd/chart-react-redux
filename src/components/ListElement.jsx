import React from 'react';

function ListElement (props) {
    return (
        <p>X: {props.id}, Y: {props.number}, TEXT: {props.text}</p>
    );
}

export default ListElement;