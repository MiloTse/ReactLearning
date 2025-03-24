import {useContext} from "react";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";


function ItemList() {
    //fetch data from context, and then iterate the list
    const data = useContext(DataContext);
    const dispatch = useContext(DispatchContext);

    function deleteItem() {
        console.log('delete');
        const action = {type: 'deleteItem' }
        dispatch(action);
    }

    return (
        <div>
            <ul onClick={deleteItem}>
                {
                    data.list.map((item,index)=>
                    <li key={index}>{item.value}</li>
                )
                }


            </ul>
        </div>
    )
}
export default ItemList;