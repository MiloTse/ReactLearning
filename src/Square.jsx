


function Square({value, index, onClick}) {
    //onClick(index) is clickHandler
    return (
        <div className='square' onClick={()=>onClick(index)}>
            {value}
        </div>
    );
}

export default Square;