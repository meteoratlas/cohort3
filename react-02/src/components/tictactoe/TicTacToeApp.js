import React, { Component } from "react";
import "./index.css";
import Board from "./Board";
import NewGame from "./NewGame";
import minimax from "./minimax";
import { Context } from "../../ThemeContextProvider";

class TicTacToeApp extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {};
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            computerPlayer: true,
            xIsNext: true,
            compIsNext: false,
            stepNumber: 0,
            gameStarted: false
        };
        this.defaultState = this.state;
    }
    static contextType = Context;
    startGame = (mode, playerFirst) => {
        this.setState(
            {
                gameStarted: true,
                computerPlayer: mode === "true" ? true : false,
                compIsNext: playerFirst === "false" ? true : false
            },
            () => {
                if (this.state.computerPlayer && this.state.compIsNext) {
                    this.AIChooseMove();
                }
            }
        );
    };
    resetGame = () => {
        this.setState(this.defaultState);
    };
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: step % 2 === 0
        });
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        let current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState(
            {
                history: history.concat([
                    {
                        squares: squares
                    }
                ]),
                stepNumber: history.length,
                xIsNext: !this.state.xIsNext
            },
            () => {
                if (this.state.computerPlayer) {
                    this.AIChooseMove();
                }
            }
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
        squares[choice] = this.state.xIsNext ? "X" : "O";
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
        const theme = this.context;
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
                <li key={move} onClick={() => this.jumpTo(move)}>
                    <a>{desc}</a>
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
        let newGame = this.state.gameStarted ? null : (
            <NewGame startGame={this.startGame} />
        );
        let gameBoard = (
            <React.Fragment>
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={current.squares}
                            onClick={i => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <h3>{status}</h3>
                        <ol>{moves}</ol>
                    </div>
                </div>
                <br />
                <br />
                <button onClick={this.resetGame}>Reset Game</button>
            </React.Fragment>
        );
        return (
            <div style={{ fontSize: theme.fontSize }}>
                <h2>Tic - Tac - Toe</h2>
                {newGame}
                {this.state.gameStarted ? gameBoard : null}
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
