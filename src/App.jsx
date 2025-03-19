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

    return (
         <div>
             <div>
                 <input value={inputValue} onChange={handleInputChange}/>
                 <button onClick={handleButtonClick}>submit</button>
             </div>
             <ul>

                 {
                     list.map((item)=>
                        <li key={<item key={item.id}>{item.value}</item>} >{item.value}</li>
                     )
                 }

             </ul>


         </div>
    )
}

export default App;