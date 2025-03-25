import {useState, useEffect  } from 'react';


function App() {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        setUserInfo({name:'Warren', job:'Developer'})
    }, []);

     return (
         <>
            <div onClick={()=>{setUserInfo({name:'Milo', job:'Engineer'})}}>{userInfo.name}</div>
         </>

     )
}

export default App;



































