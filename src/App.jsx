import {useEffect, useState} from "react";

function App() {
    const [name, setName] = useState('warren')
    //1.使用Effect，首先要用useEffect进行定义，此时，每次render过后，其内容都会执行

    useEffect(()=>{
        //请求外部数据
        fetch('http://localhost:3000/a.json').then(()=>{
            console.log('abc')
        })

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