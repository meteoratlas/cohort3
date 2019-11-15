import React, { Component } from "react";
import "./index.css";
import Board from "./Board";
import NewGame from "./NewGame";

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
            xIsNext: true,
            stepNumber: 0,
            gameStarted: true
        };
    }
    jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }
    componentDidMount(){
        if (this.state.computersTurn && this.state.stepNumber === 0){
            
        }
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
            //this.AILookForWinOrBlock(squares);
            console.log("mm: " + this.minimax(current.squares, this.state.computerMark).index);
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
    AIPlay(){
        // if first move & AI goes first, play in middle (or maybe a corner)
        // if playing second, pick opposite corner of opponents mark or middle
        // afterward, use minimax
        this.minimax();
    }
    getEmptySquares(squares){
        let result = [];
        for (let s = 0; s < squares.length; s++){
            if (squares[s] === null) result.push(s);
        }
        return result;
    }
    // pass current.squares as board
    minimax(board, player){
        let remainingMoves = this.getEmptySquares(board);
        let winner = calculateWinner(board);
        if (winner === this.state.computerMark){
            return {score:10};
        }
        else if (winner === this.state.playerMark){
            return {score:-10};
        }
        else if (winner === null && remainingMoves.length === 0) { // tie game
            return {score: 0};
        }
        let possibleMoves = [];

        for (let i = 0; i < remainingMoves.length; i++){
            let move = {};
            move.index = board[remainingMoves[i]];//? not sure if squares stored correctly for this
            board[remainingMoves[i]] = player;

            // we alternate players and simulate the next turn
            if (player === this.state.computerMark){
                let result = this.minimax(board, this.state.playerMark);
                move.score = result.score;
                //return move; //???
            }
            else{
                let result = this.minimax(board, this.state.playerMark);
                move.score = result.score;
            }
            board[remainingMoves[i]] = move.index;
            possibleMoves.push(move);
        }
        let bestMove;
        // If computer, choose the highest possible score
        if (player === this.state.computerMark){
            let max = Number.NEGATIVE_INFINITY;
            for (let i = 0; i < possibleMoves.length; i++){
                if (possibleMoves[i].score > max){
                    max = possibleMoves[i].score;
                    bestMove = i;
                }
            }
        }
        else { // If human, get lowest possible score
            let min = Number.POSITIVE_INFINITY;
            for (let i = 0; i < possibleMoves.length; i++){
                if (possibleMoves[i].score < min){
                    min = possibleMoves[i].score;
                    bestMove = i;
                }
            }
        }
        console.log(possibleMoves[bestMove])
        return possibleMoves[bestMove];
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
        let newGame = this.state.gameStarted ? null : <NewGame/>;
        return (
            <React.Fragment>
            {newGame}
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
            </div></React.Fragment>
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
        const corners = [0, 2, 4, 6, 8];
        squares[choose(corners)] = yourMark;
    }
}

function choose(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}