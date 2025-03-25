import {useState,   useCallback, useDebugValue} from 'react';

//defined a custom hook
function useContent(){
    const [content, setContent] = useState('');
    //useDebugValue 只能在自定义hook中使用
    useDebugValue('warren xxx');
    const handleContentChange = useCallback((e) => {
        setContent(e.target.value)
    }, []);
    return [content, handleContentChange];
}


//useCallback 避免render 过程反复生成函数
function App() {
    //use customized hook
    const [content, handleContentChange] = useContent();
    //第一个是参数是要执行的内容，第二个是要依赖的内容
    //useCallback返回一个函数，这个函数的执行结果和依赖的内容有关
    //如果依赖的内容没有改变，那么返回的函数就不会改变

      return (
        <input value={content ? content: ''} onChange={handleContentChange}/>
     )
}

export default App;



































