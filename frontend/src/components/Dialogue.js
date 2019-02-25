import React, { Component } from 'react';
import '../css/Dialogue.css';


const Dialogue = (props) => {
    console.log(props.text)
    return (
        <p className="dialogue">{props.text}</p>
    )
}

export default Dialogue