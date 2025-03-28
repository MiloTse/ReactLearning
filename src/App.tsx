//TypeScript是给每一个变量、形式参数、函数(入参和返回值)定义明确的类型
//Hook 相关的类型定义
import {useState} from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div>
      <button onClick={() => {setUser({name: 'zhangsan'})}}>Button</button>
      <div>{user ? .name}</div>
    </div>
  );
}
export default App;