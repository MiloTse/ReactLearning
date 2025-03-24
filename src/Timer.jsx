import {useState, useEffect} from "react";
//1，清除Effect引l入的临时内容，避免内存泄漏
function Timer() {
    const [time,setTime] =useState((new Date()).getTime());

    //当前代码存在的风险：Timer组件每次展示/隐藏，showTimer=false时，等于null，相当于被销毁了
    //但是Timer里面有一个定时器，最好在Timer被销毁的时候，定时器也能被销毁，不被销毁有可能导致内存泄漏的问题。
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
