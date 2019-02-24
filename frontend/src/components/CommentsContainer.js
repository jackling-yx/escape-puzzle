import React, { Component } from 'react';
import '../css/CommentsContainer.css';
import Comment from './Comment'

class CommentsContainer extends Component {
    render() {
        return (
            <div className="comments-container">
                <p>Comments (No spoilers!): </p>
                {this.props.comments.map( comment => 
                    <li key={comment.id}><Comment comment={comment} /></li>
                )}
            </div>
        )
    }
}

export default CommentsContainer