import {useState} from "react";


function App() {
    const list=['Do homework','CleanRooms','Coding','wateringFlower'];
    const [name,setName]= useState('');
    const [search,setSearch]= useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    return (
            <div >
                <div>
                    name: <input value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    search: <input value={search} onChange={handleSearchChange}/>
                </div>
                <div>
                    <select>
                        {
                            list.map((item,index)=>{
                                return <option key={index} value={index}>{item}</option>
                            })
                        }
                    </select>
                </div>


            </div>
    )
}

export default App;



































