import React, { Component } from 'react';
import '../css/CommentsContainer.css';
import Comment from './Comment'
import Form from './Form'

const API = 'http://localhost:3000'

class CommentsContainer extends Component {

    state = {
        name: null,
        message: null,
        reverse_date: false,
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
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

    handleSortToggle = () => {
        this.setState({
            reverse_date: !this.state.reverse_date
        })
    }


    render() {
        return (
            <div className="comments-container">
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <p>Comments (No spoilers!): </p> <button className="filter-toggle" onClick={this.handleSortToggle}>Old / New First</button>
               
                {this.state.reverse_date ? [...this.props.comments].map( comment => 
                    <li key={comment.id}><Comment comment={comment} /></li>
                ).reverse() : this.props.comments.map(comment =>
                    <li key={comment.id}><Comment comment={comment} /></li>
                )}
            </div>
        )
    }
}

export default CommentsContainer