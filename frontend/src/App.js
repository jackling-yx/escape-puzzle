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
import LevelBrowserContainer from './components/LevelBrowserContainer'

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
        creator_name: '',
        time_left: 10,
        browse_level: false,
    }
    
    componentDidMount() {
        // this.isMouseWithinPoint(MouseEvent);
        this.fetchComments();
        this.fetchPuzzles(1);
        this.setState({count: setInterval(this.outOfTime, 1000) })
            // this.selectPuzzleLevel(1);
        }
        
    outOfTime = () => {
        if (this.state.time_left <= 1 || this.state.create_level || this.state.browse_level || this.state.solution_found){
            clearInterval(this.state.count)
        }
        this.countDown()
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
        if (!this.state.create_level)
            this.setState({
                create_level: !this.state.create_level,
                browse_level: false
                // count: setInterval(this.outOfTime, 1000)
            })
        else {
            this.setState({
                create_level: !this.state.create_level,
                count: setInterval(this.outOfTime, 1000)
            })
        }
    }

    addToPointsArray = (MouseEvent) => {
        if (this.state.create_puzzle_image) {
            let array = this.getPuzzleWindowCoordinates(MouseEvent)
            array.push('')
            const current_array = [...this.state.create_points]
            current_array.push(array)
            this.setState({create_points: current_array})
        }
        else {
            alert('Please add an image before adding points!')
        }
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
        const puzzlesCopy = [...this.state.puzzles]
        const payload = {
            create_points: this.state.create_points,
            image_url: this.state.create_puzzle_image,
            difficulty: this.state.create_difficulty,
            answer: this.state.create_answer,
            creator: this.state.creator_name
        }
        event.preventDefault();
        await fetch(API + '/puzzles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
            }).then(resp => resp.json())
                .then(data => 
                    puzzlesCopy.push(data.puzzles))
        this.setState({
            create_points: [],
            create_puzzle_image: "",
            difficulty: "",
            answer: "",
            creator_name: '',
            puzzles: puzzlesCopy,
            create_level: false,
        })
    } 

    /* Browse level */
    toggleBrowseLevel = () => {
        if (!this.state.browse_level)
            this.setState({
                browse_level: !this.state.browse_level,
                create_level: false,
                // count: setInterval(this.outOfTime, 1000)
            })
        else {
            this.setState({
                browse_level: !this.state.browse_level,
                count: setInterval(this.outOfTime, 1000)
            })
        }
    }

    /* Level Selector */
    setLevel = (event) => {
        event.preventDefault()
        const selectedId = this.state.selectedPuzzleId
        const foundPuzzle = this.state.puzzles.find(puzzle => puzzle.id === parseInt(selectedId))
        const puzzleList = [...this.state.puzzles]
        this.setState({ 
            selectedPuzzle: foundPuzzle,
            time_left: 300,
            count: setInterval(this.outOfTime, 1000),
            solution_found: false,
         })
    } 

    setLevelThroughBrowser = (puzzleid) => {
        const selectedId = this.state.selectedPuzzleId
        const foundPuzzle = this.state.puzzles.find(puzzle => puzzle.id === parseInt(puzzleid))
        const puzzleList = [...this.state.puzzles]
        this.setState({ 
            selectedPuzzle: foundPuzzle,
            time_left: 300,
            count: setInterval(this.outOfTime, 1000),
            solution_found: false,
            browse_level: false
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

    // convertToTime = (time) => {
    //     let minutes = Math.floor(time/60)
    //     let seconds = time % 60
    //     debugger
    //     console.log(minutes + ':' + seconds)
    // }

    convertToTime = (time) => {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60
        console.log(minutes + ':' + seconds)
        if (seconds < 10) {
            return minutes + ':' + '0' + seconds
        }
        return minutes + ':' + seconds
    }


    render() {
        return (
            <div className="app">
                <Logo />
                {this.state.create_level ? 
                    <div>
                        <LevelCreationContainer addToPointsArray={this.addToPointsArray} create_puzzle_image={this.state.create_puzzle_image}/> 
                    </div> : 
                (this.state.browse_level) ?
                        <LevelBrowserContainer puzzles={this.state.puzzles} setLevelThroughBrowser={this.setLevelThroughBrowser}/> : 
                (this.state.solution_found) ? 
                            <ExitContainer selectedPuzzle={this.state.selectedPuzzle} toggleSolutionFound={this.toggleSolutionFound} timeLeft={this.state.time_left} convertToTime={this.convertToTime}/> : 
                (this.state.time_left <= 0) ? 
                        <FailedLevelContainer selectedPuzzleImage={this.state.selectedPuzzle.image_url} selectedPuzzle={this.state.selectedPuzzle} toggleSolutionFound={this.toggleSolutionFound} timeLeft={this.state.time_left} convertToTime={this.convertToTime}/> :  
                        <PuzzleContainer isMouseWithinPoint={this.isMouseWithinPoint} puzzles={this.state.puzzles} selectedPuzzle={this.state.selectedPuzzle} getPuzzleWindowCoordinates={this.getPuzzleWindowCoordinates} toggleSolutionFound={this.toggleSolutionFound} timeLeft={this.state.time_left} convertToTime={this.convertToTime}/>
                }
                    <div className={"create-level-toggle " + (this.state.create_level ? "create" : '')} onClick={this.toggleCreateLevel}>
                        {!this.state.create_level ? "Create Level" : "Cancel"}
                    </div>
                <div className={"create-level-toggle " + (this.state.browse_level ? "browse" : '')} onClick={this.toggleBrowseLevel}>
                      {!this.state.browse_level ? "Browse Levels" : "Back"}
                   </div>
                <LevelCreationForm updatePoints={this.updatePoints} create_points={this.state.create_points} updateLevelProperties={this.updateLevelProperties} submitToCreateLevel={this.submitToCreateLevel} show_form={this.state.create_level} outOfTime={this.outOfTime} numberOfPuzzles={this.state.puzzles.length + 1}/> 
                    {/* <form onSubmit={this.setLevel}>
                        <input name="selectedPuzzleId" onChange={this.updateLevelProperties} placeholder="Select level here"></input>
                        <input type="submit" value="Load Level"></input>
                    </form> */}
                <CommentsContainer comments={this.state.comments} updateComments={this.updateComments}/>
            </div>
        );
    }
}

export default App;
