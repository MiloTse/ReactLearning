import Header from "./Header/Header";
import Body from "./Body/Body";
import nameContext from "./nameContext";
import {useState} from "react";


function App() {
    const [user, setUser] = useState('Calculating');

    function handleHeaderChange(){
        setUser('John');
    }
       return (
         <div>
                <nameContext.Provider value={user}>
                    <Header onChange={handleHeaderChange} />
                    <nameContext.Provider value='hello word'>
                        <Body />
                    </nameContext.Provider>
                </nameContext.Provider>

         </div>
    )
}
export default App;