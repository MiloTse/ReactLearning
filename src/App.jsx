import {useState} from "react";


function App (){

    const [name, setName] = useState('warren');
    // let name = 'warren';
    return (
        <div onClick={()=>{setName('xxx')}}>{name}</div>
    )
}

export default App;