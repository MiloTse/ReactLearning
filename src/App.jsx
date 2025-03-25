import {useState, useEffect  } from 'react';


//自定义Hook
//1.复复用性会提升
//2.把分散的逻辑聚集到一起，代码可读性更好
//必须首字母use开头
//3，Hook共享的是执行逻辑，多次执行同一个Hook，每次执行对应的状态不是被共享的
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
    const [userInfoOne, changeUserInfoOne] = useUserInfo({});
      return (
         <>
            <div onClick={changeUserInfo }>{userInfo.name}</div>
            <div onClick={changeUserInfoOne }>{userInfoOne.name}</div>
          </>

     )
}

export default App;



































