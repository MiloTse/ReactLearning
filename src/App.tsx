//TypeScript是给每一个变量、形式参数、函数(入参和返回值)定义明确的类型
//Hook 相关的类型定义, useContext


import {createContext ,useContext, useState} from "react";


//GenderContext自动分析出里面是一个字符串
const GenderContext= createContext({value: "male"});

const ChildComponent = ()=> {
    const gender = useContext(GenderContext);
    return <div>Dell is {gender.value}</div>
}

const App = ()=> {
    const[gender,setGender]=useState({value: "male"});
    return (
            <GenderContext.Provider value={gender}>
                <button onClick={()=>{setGender({value: "female"})}}>toggle</button>
                <ChildComponent/>
            </GenderContext.Provider>
    )
}


export default App;