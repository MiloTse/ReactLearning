import Square from "./Square";


function getNextPlay(squares){
    const filledSquare = squares.filter(item=>(item==='X' || item==='O'));
    const filledNumber = filledSquare.length;
    return (filledNumber%2===0) ? 'X' : 'O';
}


function Board({squares, winner, onChange}) {
    // const [squares, setSquares] = useState(Array(9).fill(null));
    const nextPlay = getNextPlay(squares);
    //determine which letter is the winner
    // const winner = calculateWinner(squares);
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
            onChange(newSquares);
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