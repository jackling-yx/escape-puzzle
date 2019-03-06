import React, { Component } from 'react';
import '../css/LevelCreationForm.css';


// const LevelCreation = (props) => {
class LevelCreation extends Component {
    // console.log(props.text)

    onChangeHandler = (event) => {
       
        const pointGroupIndex = parseInt(event.target.parentNode.className.split('-')[1]);
        const input = event.target;
        const keyIndex = this.checkInputKey(input)
        const newPoints = [...this.props.create_points];

        newPoints[pointGroupIndex] = newPoints[pointGroupIndex].map((el, index) => {
            let key = index === keyIndex ? input.value : el
            return parseInt(key) ? parseInt(key) : key

        })
        console.log('newState:', newPoints)
        this.props.updatePoints(newPoints)
    }

    checkInputKey = (input) => {
        switch(input.name) {
            case 'x':
                return 0;
            case 'y':
                return 1;
            case 'text':
                return 2;
            default:
                return false
        }
    }
    
    render(){
        return (
            <form className={"levelcreation-form " + (this.props.show_form ? "show" : '')} onSubmit={this.props.submitToCreateLevel}>
                <div className="puzzle-props">
                <input required type='text' className="create-puzzle-props" name='create_puzzle_image' placeholder="Image url here" onChange={this.props.updateLevelProperties}></input>
                <input required type='text' className="create-puzzle-props" name='create_answer' placeholder="Enter your answer here" onChange={this.props.updateLevelProperties}></input>
                <input required type='text' className="create-puzzle-props" name='creator_name' placeholder="Enter your name here" onChange={this.props.updateLevelProperties}></input>
                <input required type='text' className="create-puzzle-props" name='create_difficulty' placeholder="Enter your level name here" onChange={this.props.updateLevelProperties}></input>
                </div>
                

                <h5>Your level ID is: {this.props.numberOfPuzzles}</h5>
                {this.props.create_points.map((point, i) => <label className={`point-${i}`}>
                    <input required placeholder="x coordinate" name="x" className={"x"} value={point[0]} onChange={this.onChangeHandler}></input>
                    <input required placeholder="y coordinate" name="y" className={"y"} value={point[1]} onChange={this.onChangeHandler}></input>
                    <input required type="text" placeholder="Dialogue" name="text" className={"text"} value={point[2]} onChange={this.onChangeHandler}></input>
                </label>
                )}
                <div className="button-container">
                    <input type="submit" value="submit!"></input>
                </div>
            </form>
        )
    }
}

export default LevelCreation