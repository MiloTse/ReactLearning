import {memo, useState} from "react";


//组件所依赖的props没有发生变化，那么这个组件就不进行重新渲染，使用缓存
//memo 包裹的组件，要不要重新渲，染取决于第二个参数/函数的返回值
const Child = memo(
    ({name, address}) => {
    console.log('Child render');
    return  <div>{name} {address}</div>

    },
    //取决于这第二个参数/函数的返回值
    (
        originalProps,
        props)=>{
        //如果组件接收到的address发生了变化，那么就返回false, 不用缓存
        if(originalProps.address !== props.address){
            return false;
        }else {//否则使用缓存
            return true;
        }
        // console.log(originalProps, props);
        // return true;
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



































