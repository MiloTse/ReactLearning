//1.组件存在的整个过程称为一个生命周期
//挂载（mount）->更新（update）->卸载（unmount）
//组件的挂载和销毁只有一次
//2.Effect 存在的整个过程称为一个生命周期
//创建执行-> 销毁
//组件里的effect 的挂载和销毁可能会有很多次
//3.Effect 和 Event 的区别是什么呢？
//Event 是用户行为，Effect 是组件行为。
//Effect 是依赖的数据发生变化的时候执行，有时是依赖用户行为，有时是依赖于定时器
//Effect 是有依赖数据驱动执行的，Event 一定是用户行为驱动执行的。
import {useEffect, useState} from "react";

function App() {
    const [userName, setUserName] = useState('Warren');
    useEffect(() => {
        console.log('execute  ');
        return () => {
            console.log('destroy  ');
        }
    }, [userName]);

    console.log('render');
     return (
            <div onClick={()=>{setUserName('MiloTse')}}>
                {userName}
            </div>
    )
}

export default App;



































