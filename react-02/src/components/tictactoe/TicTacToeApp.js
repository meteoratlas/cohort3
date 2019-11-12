import React, { Component } from "react";
import "./index.css";
import Board from "./Board";

class TicTacToeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            computersTurn: false,
            computerPlayer: true,
            xIsNext: true,
            stepNumber: 0,
        };
    }
    jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // AI Test
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            // AI Test
            xIsNext: !this.state.xIsNext
        });
        if (this.state.computerPlayer){
            this.AILookForWinOrBlock(squares);
        }
    }
    AILookForWinOrBlock(squares){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        for (let i = 0; i < lines.length; i++) {
            // check for win or block
            let markedSpaces = [];
            let lastNull;
            let yourMark = "X";
            for (let j = 0; j < lines[i].length; j++){
                let pos = lines[i][j];
                if (squares[pos] !== null){
                    markedSpaces.push(squares[pos]);
                }
                else { lastNull = pos; }
            }
            
            if (markedSpaces.length !== 2) {
                // there was more than 1 empty, or the whole line is full
                continue;
            }
            else {
                if (markedSpaces[0] === markedSpaces[1]){
                    // Whether this is a mandatory block or a win,
                    // we have to mark the last spot in this direction.
                    squares[lastNull] = "O";//this.state.xIsNext ? "X" : "O";
                    return;
                }
            }
        }
        /*
        squares[rand] = "O";
        this.setState({
            history: history.concat([
                {
                    squares: squares
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });*/
    }
    updateState(sq){
        const history = this.state.history;
        this.setState({
            history: history.concat([
                {
                    squares: sq
                }
            ]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default TicTacToeApp;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

function AIFirstMove(squares){
    let yourMark = "X";
    const perfectPlayer = true;
    if (perfectPlayer){
        // place mark in centre
        squares[4] = yourMark;
    }
    else {
        const corners = [0, 2, 6, 8];
        squares[choose(corners)] = yourMark;
    }
}

function choose(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

/*function AILookForWinOrBlock(squares){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        // check for win or block
        let markedSpaces = [];
        let lastNull;
        let yourMark = "X";
        for (let j = 0; j < lines[i].length; j++){
            if (squares[j] !== null){
                markedSpaces.push(squares[j]);
            }
            else { lastNull = squares[j]; }
        }
        if (markedSpaces.length !== 2) {
            // there was more than 1 empty, or the whole line is full
            continue;
        }
        else {
            if (markedSpaces[0] === markedSpaces[1]){
                // Whether this is a mandatory block or a win,
                // we have to mark the last spot in this direction.
                squares[lastNull] = yourMark;
            }
        }
    }
    this.setState({
        history: history.concat([
            {
                squares: squares
            }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
    });
}
*/
