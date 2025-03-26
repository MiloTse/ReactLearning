import {useDeferredValue, useState, memo, useTransition, startTransition} from "react";

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
    //创建一个延迟执行的过程，延迟执行是指等到浏览器空闲的时候再执行
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
            {isPending ? <div>Loading...</div> : <Todos text={deferredInputValue}/> }
        </>
    );
}
export default App;



































