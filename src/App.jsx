import React from "react";

//组件的懒加载
//也就是说Todos的代码不会跟App的代码一起打包， Todos 会打包一份，App 会打包一份
//而是当我们访问到Todos组件的时候，才会去加载Todos的代码
//这样可以提高我们的应用程序的性能
//但是需要注意的是，组件的懒加载只能用于函数组件
//不能用于类组件
//因为类组件的代码会跟App的代码一起打包
//所以类组件的代码不会被懒加载
const Todos = React.lazy(() => import("./Todos"));
function App() {
    return (
        <div><Todos/></div>
      )
}

export default App;



































