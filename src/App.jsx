//组件存在的整个过程称为一个生命周期
//挂载（mount）->更新（update）->卸载（unmount）
//effect 存在的整个过程称为一个生命周期
//创建执行->更新执行->卸载执行
//组件里的effect 的挂载和销毁可能会有很多次
import {useEffect, useState} from "react";

function App() {
    const [userName, setUserName] = useState('Warren');
    useEffect(() => {
        console.log('execute  ');
        return () => {
            console.log('destroy  ');
        }
    }, [userName]);

     return (
            <div onClick={()=>{setUserName('MiloTse')}}>
                {userName}
            </div>
    )
}

export default App;



































