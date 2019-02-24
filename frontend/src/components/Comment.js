import React, { Component } from 'react';
import '../css/Comments.css';


const Comment = (props) => {
    return (
        <div className="message-container">
            <p className="comment-message"><span>{props.comment.message}</span></p>
            <p className="comment-time"> <span>{props.comment.name} @ {props.comment.created_at}</span></p>
        </div>
    )
}

export default Comment