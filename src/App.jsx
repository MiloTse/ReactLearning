import Email from './Email';
import {useState} from "react";

function App() {
    const [to, setTo] =  useState('default');

     return (
         <div>
             <Email to={to} />
             <button onClick={()=>{setTo('Warren')}}>Send</button>
         </div>
    )
}

export default App;