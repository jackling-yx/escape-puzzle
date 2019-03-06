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

    handleSubmit =  (event) => {
        const payload = {name: this.state.name,
            message: this.state.message,
            created_at: 'Just now'
        }
       
        event.preventDefault();
        fetch(API + '/comments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                message: this.state.message
            })
        }).then(() => {
            this.props.updateComments(payload)
        })
        this.setState({
            message: '',
            name: '',
            reverse_date: false
        })
    }



    handleSortToggle = () => {
        this.setState({
            reverse_date: !this.state.reverse_date
        })
    }


    render() {
        return (
            <div className="comments-container">
                <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state}/>
                <div className='sort-toggle-container'>
                    <p className="comments-label">Comments (No spoilers!): </p> 
                    {this.state.reverse_date ? <button className="filter-toggle" onClick={this.handleSortToggle}>Newest First</button> : <button className="filter-toggle" onClick={this.handleSortToggle}>Oldest First</button>
                    }
                </div>
               
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