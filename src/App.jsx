import {useEffect, useState} from "react";

function App() {
    const [name, setName] = useState('warren');
    const [age, setAge] = useState(20);
    //1.使用Effect，首先要用useEffect进行定义，此时，每次render过后，其内容都会执行
    //2.useEffect Hook第二个函数参数，可以限定Effect的执行时机，参数值是数组，如果是空数组，表
    //示：只有在第一次渲染的时候执行，如果数组里有其他内容的时候，表示其他内容发生变化时，effect内容需要被执行。
    useEffect(()=>{
        //请求外部数据
        fetch('http://localhost:3000/a.json').then(()=>{
            console.log('abc');
        });

    },[name]);


    fetch('http://localhost:3000/b.json').then(()=>{
        console.log('bcd');
    });

    function handleNameClick() {
        setAge(age + 1);
        console.log(age);
    }

    return (
            <div onClick={handleNameClick}>
                {name}
            </div>
        )
}
export default App;