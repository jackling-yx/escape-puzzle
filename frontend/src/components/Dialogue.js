import React, { Component } from 'react';
import '../css/Dialogue.css';

class Dialogue extends Component {
    componentDidMount() {
        const dialogue = document.querySelector('.dialogue');
            this.props.text.split('').map((char, index) => {
            setTimeout(() => {
                dialogue.innerHTML += char
            }, index * 50)
        })
    }

    render() {
            console.log(this.props.text)
        return (
         <p className="dialogue"></p>
        )
    }
}

export default Dialogue