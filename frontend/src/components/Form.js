import React, { Component } from 'react';
import '../css/Form.css';


const Form = (props) => {
    return (
      <form onSubmit={props.handleSubmit} autocomplete='off'>
        <input required type="text" placeholder={"Name"} className='comment-input-name' name="name" value={props.value} onChange={props.handleChange} autocomplete='off'/>
        <input required type="text" placeholder={"Message"} className='comment-input-message' name="message" value={props.value} onChange={props.handleChange} autocomplete='off'/>           
        <input className="submit" type="submit" value="Send" />
        </form>
    )
}

export default Form