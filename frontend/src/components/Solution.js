import React, { Component } from 'react';
import '../css/Solution.css';


const Solution = (props) => {
    console.log(props.text)
    return (
        <form>
            <input className="solution" name="answer_text" value={props.answer} placeholder="Passcode" onChange={props.handleChange}></input>
            <button type="submit" className="button">Submit</button>
        </form>
    )
}

export default Solution