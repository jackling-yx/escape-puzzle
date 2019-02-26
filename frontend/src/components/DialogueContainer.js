import React, { Component } from 'react';
import '../css/DialogueContainer.css';
import Dialogue from './Dialogue'

const API = 'http://localhost:3000'

class DialogueContainer extends Component {


    render() {
        return (
            <div className="dialogue-container" onClick={this.props.hideDialogue}>
                <Dialogue text={this.props.text}/>
            </div>
        )
    }
}

export default DialogueContainer