import {useState} from "react";


function App (){

    const [name, setName] = useState('warren');
    return <div>{name}</div>
}

export default App;