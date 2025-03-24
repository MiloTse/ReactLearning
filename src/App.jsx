import { useRef} from "react";


function App() {

    const inputElement = useRef(null);
    function handleBtnClick() {
        console.log('focus');
        inputElement.current.focus();
    }

    return (
            <div>
               <input ref={inputElement}/>
                <button onClick={handleBtnClick}>
                    Focus
                </button>
            </div>
        )
}
export default App;