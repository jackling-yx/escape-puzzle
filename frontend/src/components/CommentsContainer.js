import React, { Component } from 'react';
import '../css/CommentsContainer.css';
import Comment from './Comment'
import Form from './Form'

const API = 'http://localhost:3000'

class CommentsContainer extends Component {

    state = {
        name: null,
        message: null
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        // alert('A name was submitted: ' + this.state.value);
        const payload = {name: this.state.name,
            message: this.state.message,
            created_at: 'Just now'
        }
        event.preventDefault();
        await fetch(API + '/comments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                message: this.state.message
            })
        }).then(() => {this.props.updateComments(payload)})
    }


    render() {
        return (
            <div className="comments-container">
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <p>Comments (No spoilers!): </p>
                {this.props.comments.map( comment => 
                    <li key={comment.id}><Comment comment={comment} /></li>
                )}
            </div>
        )
    }
}

export default CommentsContainer