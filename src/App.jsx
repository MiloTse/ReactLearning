import {memo, useState} from "react";


//组件所依赖的props没有发生变化，那么这个组件就不进行重新渲染，使用缓存
const Child = memo(

    ({name, address}) => {
    console.log('Child render');
    return  <div>{name} {address}</div>

    },
    //第二个参数
    (originalProps, props)=>{

    }

);

function App() {
    const [name,setName ] = useState('');
    //address 发生变化的时候，父组件的state也发生了变化，父组件一定发生render, 而父组件人的render，会触发Child的render.
    const [ address,setAddress ]= useState('');
    return (
        <>
            <div>
                name:<input value={name || ''} onChange={(e) => {
                setName(e.target.value)
            }}/>
            </div>
            <div>
                address:<input value={address ||''} onChange={(e) => {
                setAddress(e.target.value)
            }}/>
            </div>
            <Child name={name} address={address}></Child>

        </>
    );
}

export default App;



































