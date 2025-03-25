import {useSyncExternalStore} from "react";



//如果一个数据内容是来自于外部系统的，使用useSyncExternalState来实现，而不要使用下面这种实现方式
//因为这种方式会导致组件的状态和外部系统的状态不一致
//If a data content comes from an external system, use useSyncExternalState instead of this implementation
//That's because it leads to an inconsistency between the state of the component and the state of the external system

function subscribe(callback)  {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
    }
}

function App() {
    const isOnline = useSyncExternalStore(subscribe, ()=>window.navigator.onLine );

     return (
            <div>
                {isOnline.toString()}
            </div>
    )
}

export default App;



































