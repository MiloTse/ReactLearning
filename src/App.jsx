import {useState, useEffect} from 'react';


//useEffectEvent
function App() {
    const [url, setUrl] = useState('http://localhost:3000');
    const [param, setParam] = useState('?name=warren');

    useEffect(() => {
        console.log(`sending request..., address is ${url}${param}`);
    }, [url, param]);

     return (
         <>
             <div onClick={() => {setUrl('http://localhost:3001')}}>Change Url</div>
             <div onClick={() => {setParam('?name=milo')}}>Change Param</div>
         </>

     )
}

export default App;



































