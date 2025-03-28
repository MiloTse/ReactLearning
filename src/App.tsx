//TypeScript是给每一个变量、形式参数、函数(入参和返回值)定义明确的类型
//Hook 相关的类型定义
import {useEffect, useRef} from "react";

function App() {
    const ref = useRef<number | null>(null!);
    useEffect(()=>{
        ref.current = window.setTimeout(()=>{
            console.log('timer');
        },1000);
        return clearTimeout(ref.current);
    },[])
    return (
        <>

            <div >
                123
            </div>
        </>

    );
}

export default App;