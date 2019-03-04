import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo'
import PuzzleContainer from './components/PuzzleContainer'
import CommentsContainer from './components/CommentsContainer'
import ExitContainer from './components/ExitContainer';
import LevelCreationContainer from './components/LevelCreationContainer';
import LevelCreationForm from './components/LevelCreationForm'
import FailedLevelContainer from './components/FailedLevelContainer';

const API = 'http://localhost:3000'

class App extends Component {

    state = {
        comments: [],
        puzzles: [],
        selectedPuzzle: null,
        selectedPuzzleId: '',
        solution_found: false,
        create_level: false,
        create_points: [],
        create_puzzle_image: "",
        create_answer: "",
        create_difficulty: "",
        time_left: 10
    }
    
    componentDidMount() {
            // this.isMouseWithinPoint(MouseEvent);
            this.fetchComments();
            this.fetchPuzzles(1);
            this.setState({count: setInterval(this.outOfTime, 1000) })
            // this.selectPuzzleLevel(1);
        }
        
    getPuzzleWindowCoordinates = (MouseEvent) => {
        let puzzleWindow = document.querySelector('.puzzle-container')
        if (!puzzleWindow) {
            puzzleWindow = document.querySelector('.levelcreation-container')
        }
        const window = puzzleWindow.getBoundingClientRect();
        const x = window.left;
        const y = window.top;
        // console.log("x: " + x + ", y: " + y );
        const mouseX = MouseEvent.clientX
        const mouseY = MouseEvent.clientY
        // console.log("mouse x: " + mouseX + ", mouse y: " + mouseY)

        const absoluteX = Math.round(mouseX - x)
        const absoluteY = Math.round(mouseY - y)

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
    
    /* Methods for Gameplay */
    selectPuzzleLevel = (value) => {
        const foundPuzzle = this.state.puzzles.find(puzzle => puzzle.id === value)
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

    toggleSolutionFound = () => {
        this.setState({
            solution_found: !this.state.solution_found
        })
    }


    /* Methods for creating a level */
    toggleCreateLevel = () => {
        this.setState({
            create_level: !this.state.create_level,
            time_left: 300
        })
    }

    addToPointsArray = (MouseEvent) => {
        let array = this.getPuzzleWindowCoordinates(MouseEvent)
        array.push('')
        const current_array = [...this.state.create_points]
        current_array.push(array)
        this.setState({create_points: current_array})
    }

    editPoints = (point) => {
        // debugger
        this.setState({ create_points: [...this.state.create_points, point] })
    }

    updatePoints = (create_points) => {
        this.setState({ create_points })
    }

    updateLevelProperties = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitToCreateLevel = async (event) => {
        const payload = {
            create_points: this.state.create_points,
            image_url: this.state.create_puzzle_image,
            difficulty: this.state.create_difficulty,
            answer: this.state.create_answer,
        }
        event.preventDefault();
        await fetch(API + '/puzzles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(resp => resp.json()).then(data => console.log(data))
        this.setState({
            create_points: [],
            create_puzzle_image: "",
            difficulty: "",
            answer: "",
        })
    } 

    /* Level Selector */
    setLevel = (event) => {
        event.preventDefault()
        const selectedId = this.state.selectedPuzzleId
        const foundPuzzle = this.state.puzzles.find(puzzle => puzzle.id === parseInt(selectedId))
        const puzzleList = [...this.state.puzzles]
        debugger
        this.setState({ 
            selectedPuzzle: foundPuzzle,
            time_left: 10
         })
    } 

    countDown = () => {
        this.setState ({
            time_left: this.state.time_left - 1
        })
    }

    // const countDown = setInterval(() => {
    //     this.setState({
    //         time_left: this.state.time_left - 1
    //         })
    //     }, 1000)
    // })

    convertToTime = (time) => {
        let minutes = Math.floor(time/60)
        let seconds = time % 60
        debugger
        console.log(minutes + ':' + seconds)
    }

    outOfTime = () => {
        this.state.time_left === 0 ? clearInterval(this.state.count) : this.countDown()
    }

    render() {
        return (
            <div className="app">
                <Logo />
                {this.state.create_level ? 
                <div>
                    <LevelCreationContainer addToPointsArray={this.addToPointsArray} create_puzzle_image={this.state.create_puzzle_image}/> 
                    <LevelCreationForm updatePoints={this.updatePoints} create_points={this.state.create_points} updateLevelProperties={this.updateLevelProperties} submitToCreateLevel={this.submitToCreateLevel}/> 
                    </div> : (this.state.solution_found) ? 
                    <ExitContainer selectedPuzzle={this.state.selectedPuzzle} toggleSolutionFound={this.toggleSolutionFound}/> : 
                        (this.state.time_left <= 0) ? 
                    <FailedLevelContainer selectedPuzzleImage={this.state.selectedPuzzle.image_url} selectedPuzzle={this.state.selectedPuzzle} toggleSolutionFound={this.toggleSolutionFound} /> : 
                    <PuzzleContainer isMouseWithinPoint={this.isMouseWithinPoint} puzzles={this.state.puzzles} selectedPuzzle={this.state.selectedPuzzle} getPuzzleWindowCoordinates={this.getPuzzleWindowCoordinates} toggleSolutionFound={this.toggleSolutionFound} timeLeft={this.state.time_left}/>
                }
                    <div className="create-level-toggle" onClick={this.toggleCreateLevel}>
                        {!this.state.create_level ? "Create Level" : "Back"}
                    </div>
                    <form onSubmit={this.setLevel}>
                        <input name="selectedPuzzleId" onChange={this.updateLevelProperties} placeholder="Select level here"></input>
                        <input type="submit" value="Load Level"></input>
                    </form>
                <CommentsContainer comments={this.state.comments} updateComments={this.updateComments}/>
            </div>
        );
    }
}

export default App;
