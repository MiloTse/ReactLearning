import {useEffect, useState} from "react";


//如果一个数据内容是来自于外部系统的，使用useSyncExternalState来实现，而不要使用下面这种实现方式
//因为这种方式会导致组件的状态和外部系统的状态不一致
//If a data content comes from an external system, use useSyncExternalState instead of this implementation
//That's because it leads to an inconsistency between the state of the component and the state of the external system
function App() {
    const [isOnline, setIsOnline] = useState(true);
    function updateState(){
        setIsOnline(window.navigator.onLine);
    }
    useEffect(() => {
        window.addEventListener("online", updateState);
        window.addEventListener("offline", updateState);

 /*       return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }*/
    });

     return (
            <div>
                {isOnline.toString()}
            </div>
    )
}

export default App;



































