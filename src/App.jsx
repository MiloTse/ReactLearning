import {useState} from "react";

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
        const newList = list.splice(index, 1);
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