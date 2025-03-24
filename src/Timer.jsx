import {useState, useEffect} from "react";
//1，清除Effect引l入的临时内容，避免内存泄漏
function Timer() {
    const [time,setTime] =useState((new Date()).getTime());
    useEffect(() => {
        //每间隔1s 更新时间
        const timer = setInterval(() => {
            setTime((new Date()).getTime());
        },1000);

    },[]);

    return (
        <div>
            {time}
        </div>
    )
}
export default Timer;
