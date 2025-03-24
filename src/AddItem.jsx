import React, {useContext} from "react";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";

function AddItem() {
    //fetch data from context
    const data = useContext(DataContext);
    const dispatch = useContext(DispatchContext);
    //Input content's onChange event function
    function handleInputChange(e) {
       const action = {type: 'changeInput', value: e.target.value}
       dispatch(action);
    }

    //Submit button's click event function
    function handleBtnClick() {
        const action = {type: 'addItem' }
        dispatch(action);
    }

    return (
        <div>
            <input value={data.inputValue} onChange={handleInputChange}/>
            <button onClick={handleBtnClick}>Submit</button>
        </div>
    )

}

export default AddItem;