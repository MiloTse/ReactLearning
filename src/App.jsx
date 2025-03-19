import Counter from './Counter';
import {useState} from "react";

function App() {
    const [show, setShow] = useState(true);
    const [useColor, setUseColor] = useState(true);
     return (
         <div>
             <Counter />
             {show? <Counter /> : null}
             {useColor? <Counter useColor={useColor}/> : <Counter/>}
             <button onClick={() => {setUseColor(!useColor)}}>Button</button>
         </div>
    )
}

export default App;