import { forwardRef} from "react";

//使用forwardRef，把input组件暴露出去： 不推荐使用。父子组件互相操作dom降低代码的可维护性
const InputComponent = forwardRef((props,ref)=>{
    return (<input ref={ref}/>)
})
export default InputComponent