import {useState, useReducer} from "react";



//reducer 使用流程
//1.定义数据
//2.定义Reducer 函数
//3.定义Action发送改变数据的指令
//4.拿到Action之后，dispatch方法派发Action
//5.Reducer 中 根据指令修改数据
//6. 完成数据的修改， return 新数据

function listReducer(state, action) {
    switch (action.type) {
    case 'add':
            return [...state, {
                id: action.value,
                value: action.value,
            }];
    }
     return state;

}


function App() {
    const [inputValue, setInputValue] = useState('');
    // const [list, setList] = useState([]);
    const [list, dispatch] = useReducer(listReducer, [{
        id: 1,
        value: 22,
    }]);
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleButtonClick() {
        const action = {
            type: 'add',
            value: inputValue,
        };
        dispatch(action);
        //eliminate the previous value
        setInputValue('');
    }

    function handleItemClick(index) {
        // const newList = list.splice(index, 1);
        // setList(newList);

        //should use this way
/*        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);*/
    }

    return (
         <div>
             <div>
                 <input value={inputValue} onChange={handleInputChange}/>
                 <button onClick={handleButtonClick}>submit</button>
             </div>
             <ul>
                 {
                     list.map((item)=>
                        <li key={item.id}
                            onClick={()=>handleItemClick()}
                        >
                            {item.value}
                        </li>
                     )
                 }

             </ul>


         </div>
    )
}

export default App;