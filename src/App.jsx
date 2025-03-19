import Counter from './Counter';
import {useState} from "react";

function App() {
    const [show, setShow] = useState(true);

     return (
         <div>
             <Counter />
             {show? <Counter /> : null}
             <button onClick={() => {setShow(!show)}}>Button</button>

         </div>


    )
}

export default App;