import {useState} from "react";

let timer = null;
function App() {
    const [time, setTime] = useState((new Date()).getTime());
    function handleStartClick () {
        timer = setInterval(() => {
            setTime((new Date()).getTime())
        }, 1000       )
    }

    function handleStopClick() {
        clearInterval(timer)
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