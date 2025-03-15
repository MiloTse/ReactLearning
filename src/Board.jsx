import Square from "./Square";
import {useState} from "react";



    function Board(props) {
        //
        const [squares, setSquares] = useState(Array(9).fill(null));

        const clickHandler = (index) =>{
            console.log(index);
            const newSquares = squares.slice();
            newSquares[index] = 'X';
            setSquares(newSquares);
        }

        return (
            <>
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