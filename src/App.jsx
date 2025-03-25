import {useState, useEffect,useEffectEvent } from 'react';


//useEffectEvent
function App() {
    const [url, setUrl] = useState('http://localhost:3000');
    const [param, setParam] = useState('?name=warren');

    const request = useEffectEvent((url)=>{
        console.log(`sending request..., address is ${url}${param}`);
    })

    useEffect(() => {
        request(url);
    }, [url]);

     return (
         <>
             <div onClick={() => {setUrl('http://localhost:3001')}}>Change Url</div>
             <div onClick={() => {setParam('?name=milo')}}>Change Param</div>
         </>

     )
}

export default App;



































