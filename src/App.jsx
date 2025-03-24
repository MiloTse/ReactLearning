import AddItem from './AddItem';
import ItemList from "./ItemList";
import {useReducer} from "react";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";
import {useImmerReducer} from "use-immer";


function dataReducer(draft, action) {
    if (action.type === 'addItem') {
        draft.inputValue = action.value;
        return draft;
    }
    return draft;
}

function App() {
    const [data, dispatch] = useImmerReducer(dataReducer, {
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