import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo'
import PuzzleWindow from './components/PuzzleWindow'
import CommentsContainer from './components/CommentsContainer'

const API = 'http://localhost:3000'

class App extends Component {

    state = {
        comments: []
    }
    
    componentDidMount() {
            this.getPuzzleWindowCoordinates(MouseEvent);
            this.fetchComments();
        }
        
    getPuzzleWindowCoordinates = (MouseEvent) => {
    const puzzleWindow = document.querySelector('.puzzle-container')
    const window = puzzleWindow.getBoundingClientRect();
    const x = window.left;
    const y = window.top;
    console.log("x: " + x + ", y: " + y );
    const mouseX = MouseEvent.clientX
    const mouseY = MouseEvent.clientY
    console.log("mouse x: " + mouseX + ", mouse y: " + mouseY)

    const absoluteX = mouseX - x
    const absoluteY = mouseY - y

    console.log(absoluteX)
    console.log(absoluteY)
    }

    fetchComments = () => {
        fetch(API+'/comments')
            .then(resp => resp.json())
            .then(data => this.setState({ comments: data }))
        }
        

    

    render() {
        return (
            <div className="app">
                <Logo />
                <PuzzleWindow getPuzzleWindowCoordinates={this.getPuzzleWindowCoordinates}/>
                <CommentsContainer comments={this.state.comments}/>
            </div>
        );
    }
}

export default App;
