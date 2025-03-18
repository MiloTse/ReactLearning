 import {useImmer} from 'use-immer';
 import {useState} from "react";

let index = 0;

 //immutable programming rules:
function App (){
    const [list, setList ]= useState( []);
    function handleClick() {
        const newList = [...list, index];
         setList(newList);
         index = index + 1;
    }

    return (
        <>
            <div onClick={handleClick}>
                Add Item
            </div>
            {

                list.map((item => {
                    return <div key={item}>{item}</div>
                }))
            }
        </>


    )
}

 export default App;