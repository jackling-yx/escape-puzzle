import React, { Component } from 'react';
import '../css/PuzzleContainer.css';
import DialogueContainer from './DialogueContainer';
import SolutionContainer from './SolutionContainer';
import IntroDialogue from './IntroDialogue';

class PuzzleContainer extends Component {

  state = {
    found: false,
    text: "",
    answer_box: false,
    answer_text: "",
    play_intro_dialogue: true
  }

  displayMessage = (id) => {
    const puzzle = { ...this.props.selectedPuzzle }
    const foundPoint = puzzle.points.find(point => point.id == id)
  
    if (foundPoint.id == this.props.selectedPuzzle.points.length) {
      this.setState({
        found: false,
        answer_box: true,
        text: foundPoint.text
      })
    }
    else {
      this.setState({
        found: true,
        answer_box: false,
        text: foundPoint.text
      })
    }

  }
  
  hideDialogue = (event) => {
    event.stopPropagation()
    this.setState({
      found: false,
      answer_box: false,
      play_intro_dialogue: false
    })
  }
  
  checkCoordinates = (MouseEvent) => {
    const coords = this.props.getPuzzleWindowCoordinates(MouseEvent);
    const puzzle = { ...this.props.selectedPuzzle }

      // console.log(puzzle)
      const boxArray = puzzle.points.forEach((point) => {
        const box = point.box
        if ((box[0][0] <= coords[0] && coords[0] <= box[1][0]) && (box[0][1] <= coords[1] && coords[1] <= box[1][1])) {
          
          // this.setState({ found: true })
          this.displayMessage(point.id)
        }
      })
      
      
      console.log('absX: ' + coords[0])
      console.log('absY: ' + coords[1])
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleKeypress = (event) => {
    event.preventDefault();
    // if (event.key === 'Enter') {
    //   console.log(event.key)
    // }
    // else {
    //   console.log(event.key)
    // }
  }

  handleSubmitAnswer = (event) => {
    event.preventDefault()
    console.log(this.state.answer_text == this.props.selectedPuzzle.answer)

    if (this.state.answer_text == this.props.selectedPuzzle.answer) {
      this.props.toggleSolutionFound()
    }
  }

  convertToTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    console.log(minutes + ':' + seconds)
    if (seconds < 10) {
      return minutes + ':' + '0'+ seconds
    }
    return minutes + ':' + seconds
  }

    render() {
      
      return (
        <div className="puzzle-container" onClick={this.checkCoordinates}>
          <div className="hud">
          <p>Time left: {this.convertToTime(this.props.timeLeft)}</p>
            <p>Difficulty: {this.props.selectedPuzzle && this.props.selectedPuzzle.difficulty}</p>
          </div>
        { (this.state.play_intro_dialogue) && <IntroDialogue hideDialogue={this.hideDialogue}/>
        }
        { (this.state.found === true) && 
          <DialogueContainer text={this.state.text} found={this.state.found} hideDialogue={this.hideDialogue}/>
        }
        { (this.state.answer_box === true) &&
            <SolutionContainer text={this.state.text} found={this.state.found} answer={this.state.answer_text} handleChange={this.handleChange} handleSubmitAnswer={this.handleSubmitAnswer}/>
        }

          <img className="puzzle-image" src={this.props.selectedPuzzle && this.props.selectedPuzzle.image_url}></img>

        </div>
      )
    }
  }

  export default PuzzleContainer;