import React, { Component } from 'react';
import '../css/Comments.css';


const Comment = (props) => {
    return (
        <div className="message-container">
            <p className="comment-message">Message: <span>{props.comment.message}</span></p>
            <p className="comment-name">Name: <span>{props.comment.name} @ {props.comment.created_at}</span></p>
        </div>
    )
}

export default Comment