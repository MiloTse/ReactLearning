import {useState} from "react";

function App() {
    const [name, setName] = useState('warren')
    //请求外部数据
    fetch('http://localhost:3000/a.json').then(()=>{
        console.log('abc')
    })

    function handleNameClick() {
        setName('warren2');
    }

    return (
            <div onClick={handleNameClick}>
                {name}
            </div>
        )
}
export default App;