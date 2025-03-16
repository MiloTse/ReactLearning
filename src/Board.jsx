import Square from "./Square";
import {useState} from "react";


function getNextPlay(squares){
    const filledSquare = squares.filter(item=>(item==='X' || item==='O'));
    const filledNumber = filledSquare.length;
    return (filledNumber%2===0) ? 'X' : 'O';
}

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

function Board(props) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const nextPlay = getNextPlay(squares);
    //determine which letter is the winner
    const winner = calculateWinner(squares);
    //determine the status of winner of draw next letter
    const status = winner ? `${winner} is winner` : `Next player: ${nextPlay}`;
/*       let status = null;
    if(winner){
        status = winner;
    }else if(nextLetter){
        status = `Next player: ${nextLetter}`;
    }*/

    //function to handle click event
    const clickHandler = (index) =>{
        console.log(index);
        const currentSquares = squares[index];
        if(currentSquares==null){
            const newSquares = squares.slice();
            newSquares[index] = nextPlay;
            setSquares(newSquares);
        }

    }

    return (
        <>
            <div>{status}</div>
            <div className='board-row'>
                <Square value={squares[0]} index={0} onClick={clickHandler}/>
                <Square value={squares[1]} index={1} onClick={clickHandler}/>
                <Square value={squares[2]} index={2} onClick={clickHandler}/>

            </div>
            <div className='board-row'>
                    <Square value={squares[3]} index={3} onClick={clickHandler}/>
                    <Square value={squares[4]} index={4} onClick={clickHandler}/>
                    <Square value={squares[5]} index={5} onClick={clickHandler}/>
            </div>
            <div className='board-row'>
                <Square value={squares[6]} index={6} onClick={clickHandler}/>
                <Square value={squares[7]} index={7} onClick={clickHandler}/>
                <Square value={squares[8]} index={8} onClick={clickHandler}/>
            </div>
        </>
        )
    }

export default Board;