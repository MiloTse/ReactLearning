import {useDeferredValue, useState, memo, useTransition} from "react";

const Todos = memo (({text}) =>{
    const items = [];
    for (let i = 0; i < 100; i++) {
        items.push(<div key={i}>{text}</div>)
    }
    const starTime = (new Date()).getTime();
    while((new Date()).getTime() - starTime < 60){}
    return <div>{items}</div>
})

function App() {
    const[inputValue,setInputValue]= useState('');
    const [deferredInputValue, setDeferredInputValue] = useState('');
    const [isPending, startTransition] = useTransition();
    function handleOnChange(e) {
        setInputValue(e.target.value);
        //开启一个延迟执行,等到空闲时再执行deferredInputValue
        startTransition(() => {
            setDeferredInputValue(e.target.value);
        })
    }

    return (
        <>
            <input
                value={inputValue || ''}
                onChange={handleOnChange}
            />
            <Todos text={deferredInputValue}/>
        </>
    );
}
export default App;



































