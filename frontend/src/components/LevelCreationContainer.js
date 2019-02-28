import React, { Component } from 'react';
import '../css/LevelCreationContainer.css';
import LevelCreationForm from './LevelCreationForm'

class LevelCreationContainer extends Component {

    state = {
        background_url: "",
        points: ""
    }

    render() {
        return (
            <div className="levelcreation-container" onClick={this.props.addToPointsArray}>
                <img src={this.props.create_puzzle_image} className="puzzle-image" alt="Enter your image level here"></img>

            </div>
        )
    }
}

export default LevelCreationContainer