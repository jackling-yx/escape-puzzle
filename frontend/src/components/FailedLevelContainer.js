import React, { Component } from 'react';
// import '../css/ExitContainer.css';
import '../css/FailedLevelContainer.css'

const text = 'FOUND YOU... BETTER LUCK NEXT TIME...'

class FailedLevelContainer extends Component {
    
    componentDidMount() {
        const dialogue = document.querySelector('.failed-dialogue');
        text.split('').map((char, index) => {
            setTimeout(() => {
                dialogue.innerHTML += char
            }, index * 200)
        })
    }

    render() {
        return (
            <div className="exit-container">
                <div className="hud">
                    <p>Level: {this.props.selectedPuzzle && this.props.selectedPuzzle.difficulty}</p>
                </div>

                <div className="dialogue-container" onClick={this.props.toggleSolutionFound}>
                    <p className="failed-dialogue"></p>
                </div>
            </div>
        )
    }
}

export default FailedLevelContainer