import {useState} from "react";

function Todos ({text}){
    const items = [];
    for (let i = 0; i < 100; i++) {
        items.push(<div key={i}>{text}</div>)
    }


    return <div>{items}</div>
}

function App() {
    const[inputValue,setInputValue]= useState('');
    return (
        <>
            <input
                value={inputValue || ''}
                onChange={(e)=>{setInputValue(e.target.value)}}
            />
            <Todos text={inputValue}/>
        </>
    );
}

export default App;



































