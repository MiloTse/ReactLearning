import React, {Suspense} from "react";

const Todos = React.lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./Todos'))
        }, 1000);
    })

});
 function App() {
    return (

        <Suspense fallback={<div>Loading...</div>}>
            <Todos/>
        </Suspense>

      )
}

export default App;



































