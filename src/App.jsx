import {useRef, useState} from "react";

// let timer = null;
function App() {
    const [time, setTime] = useState((new Date()).getTime());

    const timer = useRef(null);
    // let timer = null;

    function handleStartClick () {
        timer.current = setInterval(() => {
            setTime((new Date()).getTime())
        }, 1000       )
    }

    function handleStopClick() {
        clearInterval(timer.current)
    }
       return (
            <div>
                <button onClick={handleStartClick}>Start</button>
                <button onClick={handleStopClick}>Stop</button>
                <div>{time}</div>
            </div>
        )
}
export default App;