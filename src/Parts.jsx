import {useState} from "react";

export function PartOne(){
    const [show, setShow] = useState(true);

    return (
        <div>
            {show? <div>PartOne</div>: null}
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
)}



export  function PartTwo(){

    const [show, setShow] = useState(true);

    return (
        <div>
            {show ? <div>PartTwo</div> : null}
            <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
    )
}



