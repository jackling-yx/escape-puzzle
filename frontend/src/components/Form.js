import React, { Component } from 'react';
// import '../css/Comments.css';


const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Name:
          <input type="text" name="name" value={props.value} onChange={props.handleChange} />
            </label>
            <label>
                Message:
          <input type="text" name="message" value={props.value} onChange={props.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form