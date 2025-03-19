import Email from './Email';
import {useState} from "react";

//UI节点位置上的内容发生变化时，原始组件会被销毁(低优先级)
//当存在Key值时，不管UI节点位置的内容是否变化，只要Key发生了变化，原始组件就会被销毁(高优先级)
function App() {
    const [to, setTo] =  useState('default');
    //列表中key值的作用主要是提升列表渲染的效率
    const [list, setList] = useState([
        {
            id: 1,
            to: 'Warren',
            content: 'Hello'
        },
        {
            id: 2,
            value: 'Lily'
        },
        {
            id: 3,
            value: 'Tom'
        },
        {
            id: 4,
            value: 'Lucy'
        },
    ]);
    console.log(to)
     return (
         <div>
             <Email to={to} key={to}/>
             <button onClick={()=>{setTo('Warren')}}>Send</button>
             {
                list.map((item,index)=><p key={item.id}>{item.value}</p>)
             }
         </div>
    )
}

export default App;