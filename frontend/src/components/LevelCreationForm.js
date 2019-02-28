import React, { Component } from 'react';
import '../css/LevelCreation.css';


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
            <form className="levelcreation-form" onSubmit={this.formSubmitHandler}>
                <h5>Positions: </h5>
                {this.props.create_points.map((point, i) => <label className={`point-${i}`}>
                    <input placeholder="x coordinate" name="x" className={"x"} value={point[0]} onChange={this.onChangeHandler}></input>
                    <input placeholder="y coordinate" name="y" className={"y"} value={point[1]} onChange={this.onChangeHandler}></input>
                    <input type="text" placeholder="Dialogue" name="text" className={"text"} value={point[2]} onChange={this.onChangeHandler}></input>
                </label>
                )}
                
            </form>
        )
    }
}

export default LevelCreation