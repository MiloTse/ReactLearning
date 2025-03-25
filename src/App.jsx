import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";



//子组件使用forwardRef使其与父组件有一定关联
const UserInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    //父组件调用子组件的DOM时，能够对DOM节点上的返回内容中转做一层限制, 父组件不能访问子组件dom的其他内容，
    //只能访问useImperativeHandle里面return的内容，比如blur.
    //子组件UserInput 没有提供的，父组件一个也取不到比如focus属性，未提供但是父组件调用会报错
    useImperativeHandle(ref, ()=>{
        return {
            //可返回方法
            blur(){
                inputRef.current.blur();
            },
            //也可返回属性
            value: inputRef.current.value,
            //...

        }
    },[]);

    const [value, setValue] = useState('default');
    return <input ref={inputRef} value={value || ''} onChange={(e) => {
        setValue(e.target.value)
    }}/>

});


function App() {
    const ref = useRef(null)
    useEffect(()=>{
            //可以取到子组件返回的方法
            console.log(ref.current.blur());
            //可以取到子组件返回的属性
            console.log(ref.current.value);
            //...

            },[]    )
    return (
        <UserInput ref={ref}/>
      )
}

export default App;



































