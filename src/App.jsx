//1.除Effect引l入的临时内容，避免内存泄露
import Timer from "./Timer";
import {useState} from "react";

function App() {
    const [showTimer, setShowTimer] = useState(false);

    function handleBtnClick() {
        const showState = !showTimer;
        setShowTimer(showState);
    }

    return (
            <div>
                <Timer/>
                <button onClick={handleBtnClick}>Toggle</button>
            </div>
        )
}
export default App;