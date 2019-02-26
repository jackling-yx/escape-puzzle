import React, { Component } from 'react';
import '../css/Form.css';


const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <input type="text" placeholder={"Name"} name="name" value={props.value} onChange={props.handleChange} />
          <input type="text" placeholder={"Message"}name="message" value={props.value} onChange={props.handleChange} />           <input className="submit" type="submit" value="Send" />
        </form>
    )
}

export default Form