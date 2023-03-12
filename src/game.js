import React, {useReducer} from "react";
import "./game.css";


// const squares1 = Array(3)
// const squares2 = Array(9).fill(null);
// const squares3 = Array(9).fill('데이터값');

// console.log(squares1) // [empty × 3]
// console.log(squares2) // [null, null, null, null, null, null, null, null, null]
// console.log(squares3) // ['데이터값', '데이터값', '데이터값', '데이터값', '데이터값', '데이터값', '데이터값', '데이터값', '데이터값']



// 상단 문구 
function getStatus(squares, xIsNext) {
  const winner = calculateWinner(squares);
  if (winner) {
    return `Winner: ${winner}`;
  } else if (squares.every(Boolean)) {  // else if (조건) 이 참이려면 squares 배열 9개 요소가 o또는 x로 다 채워질때! ( 승자없이)
    return `Scratch: Cat's game`; // 승자없이 x 또는 o 로 9개 사각형이 다 채워질때 나오는 문구 
  } else {
    return `Next player: ${xIsNext ? "X" : "0"}`;
  }
}

function gameReducer(state, action) {
  const { squares, xIsNext } = state;
  switch (action.type) {
    case "SELECT_SQUARE": {
      const { square } = action; // square는 index! :  함수 selectSqaure(square)인데 하단 버튼클릭시 selectSqaure(index) 함수호출로 index와 동일
      //console.log(action) // {type: 'SELECT_SQUARE', square: 0}  , {type: 'SELECT_SQUARE', square: 1}

      const winner = calculateWinner(squares);
      if (winner || squares[square]) { 
        return state;
      }
      const squaresCopy = [...squares];
      squaresCopy[square] = xIsNext ? "X" : "0";
      return {
        squares: squaresCopy,
        xIsNext: !xIsNext
      };
    }
    default: {
      throw new Error(
        `Unhandled action type: ${action.type}. Please fix it. Thank you.`
      );
    }
  }
}

function Board() {
  const [state, dispatch] = useReducer(gameReducer, {
    squares: Array(9).fill(null),
    xIsNext: true
  });
  const { squares, xIsNext } = state;

  function renderSquare(index) {
    return (
      <button className="square" onClick={() => selectSquare(index)}>
        {squares[index]}
      </button>
    );
  }
  // 위 버튼태그에 클릭이벤트시 selectSquare 파라미터 square가 index가
  function selectSquare(square) {
    dispatch({ type: "SELECT_SQUARE", square });
  }

  const status = getStatus(squares, xIsNext);

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}



function Game() {
  return (
    <div className="game">
      <Board />
    </div>
  );
}



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
    const [a, b, c] = lines[i];  // 예) line[0] 은 요소 [0, 1, 2] 의미 
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {  // 예) squares: array(9).fill(null),
      return squares[a];
    }
  }
  return null;
}

export default Game