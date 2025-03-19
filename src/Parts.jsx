import {useState} from "react";

export function PartOne(){
    const [show, setShow] = useState(false);

    return (
        <div>
            {show? <div>PartOne</div>: null}
            <button onClick={() => setShow(true)}>Show</button>
        </div>
)}



export  function PartTwo(){

    const [show, setShow] = useState(false);

    return (
        <div>
            {show ? <div>PartTwo</div> : null}
            <button onClick={() => setShow(true)}>Show</button>
        </div>
    )
}



