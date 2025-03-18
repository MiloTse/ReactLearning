import {useState} from "react";


//immutable programming rules:
function App (){
    const [data, setData ]= useState( {
                count : 0
    });
    const handleClick = ()=>{
        const newData = {
            count : data.count + 1
        }
        // data.count = 123;//not allowed
        setData(newData);
    }

    return (
        <div onClick={ handleClick  }  >
            {data.count}
         </div>

    )
}

export default App;