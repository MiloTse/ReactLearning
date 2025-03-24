import React, {useContext} from "react";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";

function AddItem() {
    const data = useContext(DataContext);
    const dispatch = useContext(DispatchContext);
    function handleInputChange(e) {
       const action = {type: 'addItem', value: e.target.value}
       dispatch(action);
    }

    return (
        <div>
            <input value={data.inputValue} onChange={handleInputChange}/>
            <button>Submit</button>
        </div>
    )

}

export default AddItem;