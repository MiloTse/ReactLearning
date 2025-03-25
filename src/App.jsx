//StrictMode严格模式，在Effect中的执行逻辑
import {useEffect, useState} from "react";

function App() {
    const [ time, setTime ] = useState((new Date()).getTime());

    //render函数渲染完成后，useEffect会开始判断是否执行
    useEffect(() => {
        setInterval(()=>{
            console.log("useEffect")
            setTime((new Date()).getTime())
        },1000)
    }, [])


    return (
            <div> {time} </div>
        )}
export default App;