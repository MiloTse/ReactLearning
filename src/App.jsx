
import { PartOne, PartTwo} from './Parts';
import {useState} from "react";
function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            <PartOne showPartOne={show} setShowPartOne={setShow}/>
            <PartTwo showPartOne={!show} setShowPartOne={setShow}/>

        </div>

    )
}

export default App;