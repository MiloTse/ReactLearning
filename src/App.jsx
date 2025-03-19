
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

// 1.避免数据冗余重复
// 2.同类型数据尽量合并
// 3.数据结构能浅不深
function App() {

    const [user, setUser] = useImmer({
        firstName: '',
        lastName: '',

    });



    function handleFirstNameChange(e){
        setUser((draft) => {
            draft.firstName = e.target.value;
            draft.fullName = draft.firstName + '' + draft.lastName;
        })
    }
    function handleLastNameChange(e) {
        setUser((draft) => {
            draft.lastName = e.target.value;
            draft.fullName = draft.firstName + '' + draft.lastName;
        })

    }



    return <div>
        First Name:<input onChange={handleFirstNameChange}/>
        Last Name <input onChange={handleLastNameChange} />
        Full Name(use user object) : {user.firstName} {user.lastName}


    </div>
}

 export default App;