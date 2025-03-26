import {useState} from "react";

function Child({name}) {
    console.log('Child render');
    return  <div>{name}</div>

}

function App() {
    const [name,setName ] = useState('');
    //address 发生变化的时候，父组件的state也发生了变化，父组件一定发生render, 而父组件人的render，会触发Child的render.
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



































