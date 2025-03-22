import { useReducer} from "react";



//reducer 使用流程
//1.定义数据
//2.定义Reducer 函数
//3.定义Action发送改变数据的指令
//4.拿到Action之后，dispatch方法派发Action
//5.Reducer 中 根据指令修改数据
//6. 完成数据的修改， return 新数据

function dataReducer(state, action) {
    const newState = {...state};
    switch (action.type) {
        case 'changeInput':
            newState.inputValue=action.value;
            return newState;
        case 'addItem':
            newState.list = [...newState.list,{
                id: state.inputValue,
                value: state.inputValue,//value 从原始的state 中获取
            }]
            newState.inputValue = '';
            return newState;
        case 'deleteItem':
            //copy the list
            newState.list = [...newState.list];
            newState.list.splice(action.value, 1);
            return newState;
        default:
            return state;
    }



/*    if(action.type === 'add') {
        const newState = [...state, {
            id: action.value,
            value: action.value,
        }];
        return newState;
    }

    if(action.type === 'delete') {
        const newState = [...state];
        //delete count:1 from the passing action.value
        newState.splice(action.value, 1);
        return newState;
    }*/


    return state;
}


function App() {
     // const [list, setList] = useState([]);
    const [data, dispatch] = useReducer(dataReducer,  {
        inputValue: '',
        list: []
    });
    function handleInputChange(event) {
        const action = {type: 'changeInput', value: event.target.value,};
        dispatch(action);
     }

    function handleButtonClick() {
        const action = {type: 'addItem'};
        dispatch(action);
    }

    function handleItemClick(index) {
        const action = {type: 'deleteItem', value: index,}
        dispatch(action);
    }

    return (
         <div>
             <div>
                 <input value={data.inputValue} onChange={handleInputChange}/>
                 <button onClick={handleButtonClick}>submit</button>
             </div>
             <ul>{data.list.map((item,index)=>
                        <li key={item.id}
                            onClick={()=>handleItemClick(index)}>
                            {item.value}
                        </li>
                     )}
             </ul>
         </div>
    )
}

export default App;