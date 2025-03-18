import {useState} from "react";


function App (){

    const [userInfo, setUserInfo ]= useState({
        name: 'warren',
        age: 25,
        sex: 'male'
    });

    const handleClick = ()=>{
        userInfo.name = 'xxx';
        setUserInfo(userInfo)
    }

    return (
        <div onClick={handleClick}>{userInfo.name}</div>
    )
}

export default App;