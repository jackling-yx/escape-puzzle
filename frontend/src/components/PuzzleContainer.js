import React, { Component } from 'react';
import '../css/PuzzleContainer.css';
import DialogueContainer from './DialogueContainer';

class PuzzleContainer extends Component {

  state = {
    found: false,
    text: ""
  }

  displayMessage = (id) => {
    const puzzle = { ...this.props.selectedPuzzle }
    const foundPoint = puzzle.points.find(point => point.id == id)
    
    this.setState({
      found: true,
      text: foundPoint.text
    })
    // alert(foundPoint.text)
  }

  checkCoordinates = (MouseEvent) => {
    const coords = this.props.getPuzzleWindowCoordinates(MouseEvent);
    const puzzle = { ...this.props.selectedPuzzle }

      console.log(puzzle)
      const boxArray = puzzle.points.forEach((point) => {
        const box = point.box
        if ((box[0][0] <= coords[0] && coords[0] <= box[1][0]) && (box[0][1] <= coords[1] && coords[1] <= box[1][1])) {
          
          this.setState({ found: true })
          this.displayMessage(point.id)
        }
      })
      
      
      console.log('absX: ' + coords[0])
      console.log('absY: ' + coords[1])
  }

  hideDialogue = () => {

  }

    render() {
      
      return (

        <div className="puzzle-container" onClick={this.checkCoordinates}>
          <div className="hud">
            <p>Difficulty: {this.props.selectedPuzzle && this.props.selectedPuzzle.difficulty}</p>
          </div>

        { (this.state.found === true) && 
          <DialogueContainer text={this.state.text} found={this.state.found}/>
        }

          <img className="puzzle-image" src={this.props.selectedPuzzle && this.props.selectedPuzzle.image_url}></img>

        </div>
      );
    }
  }

  export default PuzzleContainer;