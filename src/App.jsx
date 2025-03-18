 import {useImmer} from 'use-immer';
 import {useState} from "react";


 //immutable programming rules:
function App (){
    const [list, setList ]= useState( []);
    const [listOne, setListOne ]= useImmer( []);
    function handleClick() {
        const newList = [...list, list.length];
         setList(newList);
     }
    function handleListOneClick() {

        setListOne((draft)=>{
            draft.push(draft.length);
             console.log(123)
        });
     }

    return (
        <>
            <div onClick={handleClick}>
                Add List Item
            </div>
            {

                list.map((item => {
                    return <div key={item}>{item}</div>
                }))
            }
            <div>------------------------------------------------------------</div>
            <div onClick={handleListOneClick}>
                Add Immer List Item
            </div>
            {

                listOne.map((item => {
                    return <div key={item}>{item}</div>
                }))
            }
        </>


    )
}

 export default App;