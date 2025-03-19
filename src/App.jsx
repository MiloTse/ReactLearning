import {useState, useReducer} from "react";



//reducer 使用流程
//1.定义数据
//2.定义Action发送改变数据的指令
//3.拿到Action之后，dispatch方法派发Action
//4.根据指令修改数据
//5. 完成数据的修改

function App() {
    const[inputValue, setInputValue] = useState('');
    const[list, setList] = useState([]);
    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleButtonClick() {
        const newList = [...list, {
            id: inputValue,
            value: inputValue,
        }];
        setList(newList);
        //eliminate the value of input
        setInputValue('');
    }

    function handleItemClick(index) {
        // const newList = list.splice(index, 1);
        // setList(newList);

        //should use this way
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
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