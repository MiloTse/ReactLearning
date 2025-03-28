//TypeScript是给每一个变量、形式参数、函数(入参和返回值)定义明确的类型
//Hook 相关的类型定义
import {useState} from "react";

type User = {
    name?: string;
}


function App() {
    //useState<User | null> 中的类型是User或者null
  const [user, setUser] = useState<User>({})
  return (
    <div>
      <button onClick={() => {setUser({name: 'zhangsan'})}}>Button</button>
      <div>{user?.name}</div>
    </div>
  );
}
export default App;