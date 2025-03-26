import {useState} from "react";

function Child({name}) {
    console.log('Child render');
    return  <div>{name}</div>

}

function App() {
    const [name,setName ]= useState('');
    return (
        <>
            <div>
                name:<input value={name || ''} onChange={(e)=> {setName(e.target.value)}}/>
            </div>
            <Child name={name}></Child>

        </>
    );
}

export default App;



































