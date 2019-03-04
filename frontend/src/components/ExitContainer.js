import React, { Component } from 'react';
import '../css/ExitContainer.css';

const text = 'Well done. You managed to get out of there in time!'

class ExitContainer extends Component {

    componentDidMount() {
        const dialogue = document.querySelector('.dialogue');
        text.split('').map((char, index) => {
            setTimeout(() => {
                dialogue.innerHTML += char
            }, index * 50)
        })
    }

    render() {
        return (
            <div className="exit-container">
                <div className="hud">
                    <p>Level: {this.props.selectedPuzzle && this.props.selectedPuzzle.difficulty}</p>
                </div>

                <div className="dialogue-container" onClick={this.props.toggleSolutionFound}>
                    <p className="dialogue"></p>
                </div>
                

            </div>
        )
    }
}

export default ExitContainer