import React, { Component } from 'react';
import '../css/PuzzleWindow.css';

class PuzzleWindow extends Component {
  render() {
    return (
      <div className="puzzle-container" onClick={this.props.getPuzzleWindowCoordinates}>
        <img className="puzzle-image" src="/darkoffice.jpg"></img>

      </div>
    );
  }
}

export default PuzzleWindow;
