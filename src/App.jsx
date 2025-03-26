import React, {Suspense, useState} from "react";

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

 function App() {
     const [isHello, setIsHello] = useState(true);
    const Component = isHello ? Hello: Todos;
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



































