import {useContext} from "react";
import DataContext from "./DataContext";

function ItemList() {
    //fetch data from context, and then iterate the list
    const data = useContext(DataContext);

    return (
        <div>
            <ul>
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