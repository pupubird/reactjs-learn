import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> I am {props.name} and
            {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;



