import React, { Component } from "react";
import "./index.css";
import Board from "./Board";
import NewGame from "./NewGame";
import minimax from "./minimax";

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
            computerMark: "O", // or X
            playerMark: "X",
            curPlayer: "X",
            xIsNext: true,
            compIsNext: false,
            stepNumber: 0,
            gameStarted: true
        };
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        });
    }
    componentDidMount() {
        if (this.state.computersTurn && this.state.stepNumber === 0) {
            // AI takes first turn
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        let current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // AI Test
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState(
            {
                history: history.concat([
                    {
                        squares: squares
                    }
                ]),
                stepNumber: history.length,
                // AI Test
                xIsNext: !this.state.xIsNext
            },
            this.AIChooseMove
        );
    }
    AIChooseMove() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        let current = history[history.length - 1];
        let squares = current.squares.slice();
        if (minimax.noMovesLeft(squares)) return;
        let choice = minimax.findBestMove(
            current.squares,
            this.state.xIsNext === this.state.compIsX
        );
        squares[choice] = this.state.xIsNext === this.state.compIsX ? "X" : "O";
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
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else if (this.state.stepNumber === 9) {
            status = "It's a tie.";
        } else {
            status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        }
        let newGame = this.state.gameStarted ? null : <NewGame />;
        return (
            <React.Fragment>
                {newGame}
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={current.squares}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </React.Fragment>
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
