import React, { Component } from 'react';
import '../css/LevelBrowserContainer.css';
import LevelCard from './LevelCard'
import LevelCreationForm from './LevelCreationForm'

class LevelBrowserContainer extends Component {

    render() {
        return (
            <div className="levelbrowser-container" onClick={this.props.addToPointsArray}>
                {this.props.puzzles.map(puzzle => <LevelCard puzzle={puzzle}/>)}
            </div>
        )
    }
}

export default LevelBrowserContainer