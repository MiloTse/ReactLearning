//StrictMode严格模式，在Effect中的执行逻辑
//render函数渲染完成后，useEffect会开始判断是否执行
import {useEffect, useState} from "react";

function App() {
    const [ time, setTime ] = useState((new Date()).getTime());

    //timer need to be clear on strict development mode
/*
    useEffect(() => {
        const timer = setInterval(()=>{
            console.log("useEffect")
            setTime((new Date()).getTime())
        },1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

*/
    //全局事件绑定的严格开发模式下，需要进行清理
    //Global event binding requires cleanup in strict development mode.
    useEffect(()=>{
        function onScroll() {
            console.log("scroll");
        }

        window.addEventListener("scroll",  onScroll);

    },[]);

    return (
            <div style={{height:'5000px'}}> {time} </div>
        )}
export default App;