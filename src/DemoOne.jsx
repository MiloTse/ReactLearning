import React, {Suspense, useDeferredValue, useState} from "react";

const Todos = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./Todos'))
        }, 1000);
    })

});
const Hello = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./Hello'))
        }, 1000);
    })

});


//1.isHello 变为 false
//2.加载Todos组件
//3.deferredIsHello 从true 变为 false
//4.Component 根据deferredIsHello 从Hello 变成Todos 这个组件
 function App() {
     const [isHello, setIsHello] = useState(true);
     const deferredIsHello = useDeferredValue(isHello);
    const Component = deferredIsHello ? Hello: Todos;
    return (
        <>
            <button onClick={() => setIsHello(false)}>Toggle</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense>
        </>
      );
}

export default App;



































