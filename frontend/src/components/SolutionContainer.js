import React, { Component } from 'react';
import '../css/SolutionContainer.css';
import Solution from './Solution'

class SolutionContainer extends Component {


    render() {
        return (
            <div className="solution-container" onSubmit={this.props.handleSubmitAnswer}>
                <Solution text={this.props.text} answer={this.props.answer} handleChange={this.props.handleChange} handleSubmitAnswer={this.props.handleSubmitAnswer}/>
            </div>
        )
    }
}

export default SolutionContainer