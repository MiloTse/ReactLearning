import {useState} from "react";

function Email({to}) {

    return (
        <div>
             <p>To: {to}</p>
            <div>Content: <input/> </div>
        </div>
    )


}


export default Email;

