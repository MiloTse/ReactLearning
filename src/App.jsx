
import {useImmer} from "use-immer";
import {useState} from "react";

//从命令式开发到声明式开发
//命令式： 一步步指路， 告诉出租车司机怎么回家
// 声明式： 告诉出租车司机，你家在哪里，司机会自动把车开到家门口
// 声明式开发的好处： 1. 代码更加简洁 2. 代码更加易读 3. 代码更加易维护
// 声明式开发的坏处： 1. 代码更加复杂 2. 代码更加难读 3. 代码更加难维护
// 声明式开发的例子： React 16.8 之后的 hooks， React 17 之后的 Concurrent Mode， React 18 之后的 Suspense
// 声明式开发的例子： React 16.8 之前的 setState， React 17 之前的 setState， React 18 之前的 setState
// 声明式开发的例子： React 16.8 之后的 useReducer， React 17 之后的 useReducer， React 18 之后的 useReducer
// 声明式开发的例子： React 16.8 之后的 useContext， React 17 之后的 useContext， React 18 之后的 useContext
// 声明式开发的例子： React 16.8 之后的 useMemo， React 17 之后的 useMemo， React 18 之后的 useMemo
function App() {

    const [firstName, setFirstName] = useImmer('');
    const [lastName, setLastName] = useImmer('');
    //空字符串没必要用immer，用useState就可以了
    const [fullName, setFullName] = useState('');


    function handleFirstNameChange(e){
      setFirstName(e.target.value);
      setFullName(e.target.value + '' + lastName);
    }
    function handleLastNameChange(e) {
      setLastName(e.target.value);
      setFullName(firstName +' ' + e.target.value);

    }



    return <div>
        First Name:<input onChange={handleFirstNameChange}/>
        Last Name <input onChange={(e)=> {setLastName(e.target.value)}} />
        Full Name: {firstName} {lastName}
        Full Name2: {fullName}


    </div>
}

 export default App;