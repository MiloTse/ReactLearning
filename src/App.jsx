import {useState, useEffect  } from 'react';


function App() {
    const [userInfo, setUserInfo] = useState({});
    const [parentInfo, setParentInfo] = useState({name:'aaa'});

    useEffect(() => {
        setUserInfo({name:'Warren', job:'Developer'})
    }, []);

     return (
         <>
            <div onClick={()=>{setUserInfo({name:'Milo', job:'Engineer'})}}>{userInfo.name}</div>
             <div onClick={()=>{setParentInfo({name:'bbb'})}}>{parentInfo.name}</div>
         </>

     )
}

export default App;



































