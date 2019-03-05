import React, { Component } from 'react';
import '../css/LevelBrowserContainer.css';
import LevelCard from './LevelCard'
import LevelCreationForm from './LevelCreationForm'

class LevelBrowserContainer extends Component {

    render() {
        return (
            <div className="levelbrowser-container">
                {this.props.puzzles.map(puzzle => <LevelCard puzzle={puzzle} setLevelThroughBrowser={this.props.setLevelThroughBrowser} key={puzzle.id}/>)}
            </div>
        )
    }
}

export default LevelBrowserContainer