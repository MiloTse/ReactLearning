import {useState, useEffect  } from 'react';


//自定义Hook
//1.复复用性会提升
//2.把分散的逻辑聚集到一起，代码可读性更好
//必须首字母use开头
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
    const [parentInfo, setParentInfo] = useState({name:'dad'});
     return (
         <>
            <div onClick={changeUserInfo }>{userInfo.name}</div>
             <div onClick={()=>{setParentInfo({name:'mom'})}}>{parentInfo.name}</div>
         </>

     )
}

export default App;



































