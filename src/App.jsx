 import {useImmer} from 'use-immer';

//immutable programming rules:
function App (){
    const [data, setData ]= useImmer( {
                count : 0
    });
    const handleClick = ()=>{
        setData((draft)=>{
            draft.count = draft.count + 1;
        })
     }

    return (
        <div onClick={ handleClick  }  >
            {data.count}
         </div>

    )
}

export default App;