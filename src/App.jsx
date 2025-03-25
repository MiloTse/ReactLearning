import {useState, useEffect  } from 'react';

function useUserInfo(){
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        setUserInfo({name:'Warren', job:'Developer'})
    }, []);

    function changeUserInfo(){
        setUserInfo({name:'Milo', job:'Engineer'})
    }
    return [userInfo, changeUserInfo];
}

function App() {
    const [userInfo, changeUserInfo] = useUserInfo({});
    const [parentInfo, setParentInfo] = useState({name:'aaa'});


     return (
         <>
            <div onClick={changeUserInfo }>{userInfo.name}</div>
             <div onClick={()=>{setParentInfo({name:'bbb'})}}>{parentInfo.name}</div>
         </>

     )
}

export default App;



































