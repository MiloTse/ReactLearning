import {useEffect, useState} from "react";

function App() {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    function handleOnline(e) {
        console.log(e,"Online");
    }

    function handleOffline(e) {
        console.log(e,"Offline");
    }

    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    });

     return (
            <div>
                Hello World
            </div>
    )
}

export default App;



































