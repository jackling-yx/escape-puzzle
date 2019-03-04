import React, { Component } from 'react';
import LevelBrowserContainer from '../css/LevelBrowserContainer.css'


const LevelCard = (props) => {
    return (
        <div className="level-card">
            <div>
                <img src={props.puzzle.image_url} className="puzzle-image-card"></img>
            </div>
            <p className="card-details">Level: {props.puzzle.difficulty}</p>
            <p className="card-details">Level Code: {props.puzzle.id}</p>
        </div>
    )
}

export default LevelCard