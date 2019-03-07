import React, { Component } from 'react';
import '../css/LevelCreationContainer.css';
import LevelCreationForm from './LevelCreationForm'

const imgURLRegExp = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/

class LevelCreationContainer extends Component {

    render() {
        return (
            <div className="levelcreation-container" onClick={this.props.addToPointsArray}>
                {imgURLRegExp.test(this.props.create_puzzle_image) ? <img src={this.props.create_puzzle_image} className="puzzle-image" alt="Enter your image level here"></img> : null}
            </div>
        )
    }
}

export default LevelCreationContainer