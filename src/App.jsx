import {useState} from "react";

function Child({name}) {
    console.log('Child render');
    return  <div>{name}</div>

}

function App() {
    const [name,setName ] = useState('');
    const [ address,setAddress ]= useState('');
    return (
        <>
            <div>
                name:<input value={name || ''} onChange={(e) => {
                setName(e.target.value)
            }}/>
            </div>
            <div>
                address:<input value={address ||''} onChange={(e) => {
                setAddress(e.target.value)
            }}/>
            </div>
            <Child name={name}></Child>

        </>
    );
}

export default App;



































