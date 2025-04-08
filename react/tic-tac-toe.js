const { useState } = React;

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index] || calculateWinner(board)) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const winner = calculateWinner(board);

    return (
        <div className="tic-tac-toe">
            <h2>Tic Tac Toe</h2>
            <div className="board">
                {board.map((cell, index) => (
                    <button key={index} onClick={() => handleClick(index)}>
                        {cell}
                    </button>
                ))}
            </div>
            <h3>{winner ? `Győztes: ${winner}` : `Következő: ${isXNext ? "X" : "O"}`}</h3>
        </div>
    );
}

function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}