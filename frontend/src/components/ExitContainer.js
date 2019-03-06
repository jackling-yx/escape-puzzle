import React, { Component } from 'react';
import '../css/ExitContainer.css';

const text = 'Well done. You managed to escape in time! Why not try and create a level for yourself and share with your friends? Feel free to browse levels that others have created too!'

class ExitContainer extends Component {

    componentDidMount() {
        const dialogue = document.querySelector('.exit-dialogue');
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
                    <p>Created By: {this.props.selectedPuzzle && this.props.selectedPuzzle.creator}</p>
                    <p>Level: {this.props.selectedPuzzle && this.props.selectedPuzzle.difficulty}</p>
                    <p>Time left: {this.props.convertToTime(this.props.timeLeft)}</p>
                </div>

                <div className="dialogue-container">
                    <p className="exit-dialogue"></p>
                </div>
                

            </div>
        )
    }
}

export default ExitContainer