import AddItem from './AddItem';
import ItemList from "./ItemList";
import {useReducer} from "react";
import DataContext from "./DataContext";


function dataReducer(state, action) {
    return state;
}

function App() {
    const [data, dispatch] = useReducer(dataReducer, {
        inputValue: '',
        list: [],
    });

       return (
           <>
               <DataContext.Provider value={{data}}>
                   <AddItem />
                   <ItemList />
               </DataContext.Provider>

           </>


    )
}
export default App;