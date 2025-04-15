import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = index => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = squares => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
         return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gap: '5px',
        marginBottom: '10px'
      }}>
        {board.map((value, i) => (
          <button
            key={i}
            style={{ width: '100px', height: '100px', fontSize: '2rem' }}
            onClick={() => handleClick(i)}
          >
            {value}
          </button>
        ))}
      </div>
      {winner && <p>Győztes: {winner}</p>}
    </div>
  );
}

export default TicTacToe;