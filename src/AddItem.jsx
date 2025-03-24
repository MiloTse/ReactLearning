import React, {useContext} from "react";
import DataContext from "./DataContext";

function AddItem() {
    const data = useContext(DataContext);
    return (
        <div>
            <input value={data.inputValue}/>
            <button>Submit</button>
        </div>
    )

}

export default AddItem;