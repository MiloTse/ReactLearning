import {useState} from "react";


function App (){

    const [userInfo, setUserInfo ]= useState({
        name: 'warren',
        age: 25,
        sex: 'male'
    });

    const handleClick = ()=>{
        //copy userInfo object, has a different reference memory address
        const newUserInfo = {...userInfo};
        //change the new copy object's name
        newUserInfo.name = 'mike';
        //assign the new copy object to userInfo through setUserInfo
        setUserInfo(newUserInfo)
    }

    return (
        <div onClick={handleClick}>{userInfo.name}</div>
    )
}

export default App;