//TypeScript是给每一个变量、形式参数、函数(入参和返回值)定义明确的类型
//Hook 相关的类型定义
import {useRef} from "react";

function App() {
 const ref = useRef(null);

 function handleDivClick() {
   console.log(ref.current.innerHTML);
 }
  return (
      <>

          <div ref={ref} onClick={handleDivClick}>
              123
          </div>
      </>

  );
}

export default App;