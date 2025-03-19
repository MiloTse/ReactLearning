import Email from './Email';
import {useState} from "react";

function App() {
    const [to, setTo] =  useState('default');

     return (
         <div>
              {
                 (to==='default') ? <Email to={to} /> : <div><Email to={to} /></div>
             }
             <button onClick={()=>{setTo('Warren')}}>Send</button>
         </div>
    )
}

export default App;