import {useState} from "react";

function Timer() {
    const [time,setTime] =useState((new Date()).getTime());
    return (
        <div>
            {time}
        </div>
    )
}
export default Timer;
