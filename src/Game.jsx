
import {Component} from "react";
import Board from "./Board";
import History from "./History";
import {useState} from "react";


//通过区块内的三个格子判断胜利
function calculateWinner(squares) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    const filledSquare = squares.filter(item=>(item==='X' || item==='O'));
    if(filledSquare.length===9){
        return 'No One';
    }
    return null;
}


function Game  () {
    const [squares, setSquares]= useState(Array(9).fill(null));
    const [history, setHistory] = useState([Array(9).fill(null)]);

    //是否已经存在胜利者
    const winner = calculateWinner(squares);

    //通过onChange事件传递一个函数给Board组件
    const handleSquareChange = (newSquares) => {
        setSquares(newSquares);
        setHistory([...history, newSquares]);
    }

    const handleHistoryChange = (index) => {
        const newSquares = history[index];
        setSquares(newSquares);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} winner={winner} onChange={handleSquareChange}/>
            </div>
            <div className="game-history">
                {winner ? <History history={history} onChange={handleHistoryChange}/> : null }
            </div>
        </div>
    )
}

export default Game;