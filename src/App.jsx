import {useState} from "react";

function App() {
    const [time, setTime] = useState((new Date()).getTime());
    function handleStartClick () {
        setInterval(() => {
            setTime((new Date()).getTime())
        }, 1000       )
    }

       return (
            <div>
                <button onClick={handleStartClick}>Start</button>
                <button>Stop</button>
                <div>{time}</div>
            </div>
        )
}
export default App;