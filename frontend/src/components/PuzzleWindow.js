import React, { Component } from 'react';
import '../css/PuzzleWindow.css';

class PuzzleWindow extends Component {
  
  // checkCoordinates = (MouseEvent) => {
  //   const coords = this.getPuzzleWindowCoordinates(MouseEvent);
  //   const puzzle = { ...this.props.selectPuzzleLevel }

  //   const checkX = 'hello'

  //   if (!puzzle) {
  //     console.log(checkX)
  //   }

  //   console.log('absX: ' + coords[0])
  //   console.log('absY: ' + coords[1])
  // }
  
  render() {
    return (
      
      <div className="puzzle-container" onClick={this.props.isMouseWithinPoint}>
        <div className="hud">
          <p>Difficulty: {this.props.selectedPuzzle && this.props.selectedPuzzle.difficulty}</p>
        </div>
        <img className="puzzle-image" src="/darkoffice.jpg"></img>

      </div>
    );
  }
}

export default PuzzleWindow;