import React, { Component } from 'react';
import '../css/PuzzleContainer.css';

class PuzzleContainer extends Component {

  state = {
    found: false
  }

  displayMessage = (id) => {
    const puzzle = { ...this.props.selectedPuzzle }
    const foundPoint = puzzle.points.find(point => point.id == id)
    
    this.setState({found: true})
    alert(foundPoint.text)
  }

  checkCoordinates = (MouseEvent) => {
    const coords = this.props.getPuzzleWindowCoordinates(MouseEvent);
    const puzzle = { ...this.props.selectedPuzzle }

    if (puzzle) {
      console.log(puzzle)
      const boxArray = puzzle.points.forEach((point) => {
        const box = point.box
        if ((box[0][0] <= coords[0] && coords[0] <= box[1][0]) && (box[0][1] <= coords[1] && coords[1] <= box[1][1])) {
          
          this.setState({ found: true })

          console.log("Hit!")
          this.displayMessage(point.id)
        }
        else {
          this.setState({found: false})
        }
      })


      console.log('absX: ' + coords[0])
      console.log('absY: ' + coords[1])
    }
  }

    render() {
      
      return (

        <div className="puzzle-container" onClick={this.checkCoordinates}>
          <div className="hud">
            <p>Difficulty: {this.props.selectedPuzzle && this.props.selectedPuzzle.difficulty}</p>
          </div>

        { (this.state.found === true) && 
          <div className="hud">
              <p>Hello</p>
          </div>
        
        }

          <img className="puzzle-image" src={this.props.selectedPuzzle && this.props.selectedPuzzle.image_url}></img>

        </div>
      );
    }
  }

  export default PuzzleContainer;