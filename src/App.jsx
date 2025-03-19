import Email from './Email';
import {useState} from "react";

//UI节点位置上的内容发生变化时，原始组件会被销毁(低优先级)
//当存在Key值时，不管UI节点位置的内容是否变化，只要Key发生了变化，原始组件就会被销毁(高优先级)
function App() {
    const [to, setTo] =  useState('default');
    console.log(to)
     return (
         <div>
             <Email to={to} key={to}/>
             <button onClick={()=>{setTo('Warren')}}>Send</button>
         </div>
    )
}

export default App;