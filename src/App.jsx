import AddItem from './AddItem';
import ItemList from "./ItemList";
import {useReducer} from "react";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";

function dataReducer(state, action) {
    if (action.type === 'addItem') {
        const newState = {...state};
        newState.inputValue = action.value;
        return newState;
    }
    return state;
}

function App() {
    const [data, dispatch] = useReducer(dataReducer, {
        inputValue: '',
        list: [],
    });

       return (
           <>
               <DataContext.Provider value={data}>
                   <DispatchContext.Provider value={dispatch}>
                       <AddItem />
                       <ItemList />
                   </DispatchContext.Provider>

               </DataContext.Provider>

           </>


    )
}
export default App;