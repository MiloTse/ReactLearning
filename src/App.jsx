import {useState} from "react";


//1. trigger -> render(virtual dom) -> commit
//2. virtual dom: 真实dom的一个js对象表达
//3. 快照态的数据
//4. batch update
function App (){

    // const [count, setCount ]= useState( 0);
    const result = useState( 0);
    const count= result[0];
    const setCount = result[1];

    const handleClick = ()=>{
        setCount(( count) => count+ 1);
        setCount(( count) => count+ 1);
        setCount(( count) => count+ 1);


    }

    return (
        <div onClick={handleClick}>{count}</div>
    )
}

export default App;