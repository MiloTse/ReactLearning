import {useState} from "react";


//immutable programming rules:
function App (){
    const [data, setData ]= useState( {
                count : 0
    });
    const handleClick = ()=>{
        data.count = 123;
        setData(data);
    }

    return (
        <div onClick={ handleClick  }  >
            {data.count}
         </div>

    )
}

export default App;