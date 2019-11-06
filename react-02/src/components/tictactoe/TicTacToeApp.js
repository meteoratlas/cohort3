import React, { Component } from 'react';
import './index.css';
import Board from "./Board";

class TicTacToeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="game">
            <div className="game-board">
            <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div> );
    }
}
 
export default TicTacToeApp;