const minimax = {
    COUNT: 0,
    MAX_INT: Number.MAX_SAFE_INTEGER,
    MIN_INT: Number.MIN_SAFE_INTEGER,
    // borrowed a lot of this from SC, then simplified some functions & added alpha-beta pruning
    findBestMove(board, compIsNextX) {
        this.COUNT = 0;
        if (minimax.calculateWinner(board)) {
            return;
        }
        let bestMove = null;
        let bestVal = compIsNextX ? this.MIN_INT : this.MAX_INT;
        for (let i = 0; i < board.length; i += 1) {
            if (board[i] === null) {
                board[i] = compIsNextX ? "X" : "O";
                // calculate the value as a result of this move
                let val = minimax.minimax(board, 0, !compIsNextX);
                // undo move
                board[i] = null;
                // reset bestVal and bestMove if:
                if (compIsNextX && val > bestVal) {
                    bestVal = val;
                    bestMove = i;
                }
                if (!compIsNextX && val < bestVal) {
                    bestVal = val;
                    bestMove = i;
                }
            }
        }
        // uncomment the following to lazily measure recursive performance;
        //AB pruning saves a large amount of minimax calls,
        //particularly when the board is largely empty
        //(decreasing gains as board is filled).

        //console.log(this.COUNT);
        return bestMove;
    },
    minimax(
        board,
        depth,
        compIsNext,
        alpha = this.MIN_INT,
        beta = this.MAX_INT
    ) {
        this.COUNT++;
        // check the current score
        let score = minimax.evaluate(board);
        // X won or O won, return respective scores
        if (score === 100) return score - depth;
        if (score === -100) return score + depth;
        if (minimax.noMovesLeft(board)) return 0;
        // X is maximazer and X is computer
        if (compIsNext) {
            let best = this.MIN_INT;
            for (let i = 0; i < board.length; i += 1) {
                // loop through board, find empty spots
                if (board[i] === null) {
                    // move to the empty spot
                    board[i] = "X";
                    // calculate the resulting value
                    best = Math.max(
                        best,
                        minimax.minimax(
                            board,
                            depth + 1,
                            !compIsNext,
                            alpha,
                            beta
                        )
                    );
                    board[i] = null;
                    if (best > alpha) alpha = best;
                    if (alpha > beta) break;
                }
            }
            return best;
        } else {
            let best = this.MAX_INT;
            for (let i = 0; i < board.length; i += 1) {
                // loop through board, find empty spots
                if (board[i] === null) {
                    // move to the empty spot
                    board[i] = "O";
                    // calculate the resulting value
                    best = Math.min(
                        best,
                        minimax.minimax(
                            board,
                            depth + 1,
                            !compIsNext,
                            alpha,
                            beta
                        )
                    );
                    board[i] = null;
                    if (best < beta) beta = best;
                    if (alpha > beta) break;
                }
            }
            return best;
        }
    },
    getEmptySquares(squares) {
        let result = [];
        for (let s = 0; s < squares.length; s++) {
            if (squares[s] === null) result.push(s);
        }
        return result;
    },
    calculateWinner: squares => {
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
    },
    evaluate(squares) {
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
                if (squares[a] === "X") return 100;
                else {
                    return -100;
                }
            }
        }
        return null;
    },
    noMovesLeft: board => {
        return board.every(sq => sq !== null);
    }
};

export default minimax;
