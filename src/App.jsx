import AddItem from './AddItem';
import ItemList from "./ItemList";
import {useReducer} from "react";


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
                <AddItem />
                <ItemList />
           </>


    )
}
export default App;