import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo'
import PuzzleContainer from './components/PuzzleContainer'
import CommentsContainer from './components/CommentsContainer'

const API = 'http://localhost:3000'

class App extends Component {

    state = {
        comments: [],
        puzzles: [],
        selectedPuzzle: null
    }
    
    componentDidMount() {
            // this.isMouseWithinPoint(MouseEvent);
            this.fetchComments();
            this.fetchPuzzles(1);
            // this.selectPuzzleLevel(1);
        }
        
    getPuzzleWindowCoordinates = (MouseEvent) => {
    const puzzleWindow = document.querySelector('.puzzle-container')
    const window = puzzleWindow.getBoundingClientRect();
    const x = window.left;
    const y = window.top;
    // console.log("x: " + x + ", y: " + y );
    const mouseX = MouseEvent.clientX
    const mouseY = MouseEvent.clientY
    // console.log("mouse x: " + mouseX + ", mouse y: " + mouseY)

    const absoluteX = mouseX - x
    const absoluteY = mouseY - y

    return [absoluteX, absoluteY]
    }

    fetchComments = async () => {
        await fetch(API+'/comments')
            .then(resp => resp.json())
            .then(data => this.setState({ comments: data }))
        }
        
    fetchPuzzles = async (value) => {
        await fetch(API+'/puzzles')
            .then(resp => resp.json())
            .then(data => this.setState({puzzles: data}))
            .then(() => {
                const foundPuzzle = this.state.puzzles.find(puzzle => puzzle.id === value)
                this.setState({ selectedPuzzle: foundPuzzle })
            })
            
    }
    
    selectPuzzleLevel = (value) => {
        const foundPuzzle = this.state.puzzles.map(puzzle => puzzle.id === value)
        this.setState({selectedPuzzle: foundPuzzle})
    } 

    isMouseWithinPoint = (MouseEvent) => {
        const coords = this.getPuzzleWindowCoordinates(MouseEvent);
        const puzzle = {...this.state.selectPuzzleLevel}

        const checkX = 'hello'

        if (!puzzle) {
            console.log(checkX)
        }

        console.log('absX: ' + coords[0])
        console.log('absY: ' + coords[1])
    }

    updateComments = (commentObj) => {
        const commentsArray = [...this.state.comments]
        commentsArray.push(commentObj)
        this.setState({
            comments: commentsArray
        })
    }

    render() {
        return (
            <div className="app">
                <Logo />
                <PuzzleContainer isMouseWithinPoint={this.isMouseWithinPoint} puzzles={this.state.puzzles} selectedPuzzle={this.state.selectedPuzzle} getPuzzleWindowCoordinates={this.getPuzzleWindowCoordinates}/>
                <CommentsContainer comments={this.state.comments} updateComments={this.updateComments}/>
            </div>
        );
    }
}

export default App;
