import React, {Profiler} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

function renderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime)

}
//Profiler是用于性能分析的工具，它可以在React应用程序中捕获组件的渲染时间和内存使用情况。
//Profiler可以帮助我们找到性能瓶颈，优化我们的应用程序。
//Profiler的使用方法如下：
//1.在需要分析的组件上使用Profiler组件，例如：
//<Profiler id={"app"} onRender={renderCallback}>
//    <App />
//</Profiler>
//2.在Profiler组件中传入两个参数：
//id：用于标识该Profiler组件，用于区分不同的Profiler组件。
//onRender：用于回调函数，用于捕获组件的渲染时间和内存使用情况。
//3.在onRender回调函数中，我们可以获取到以下参数：
//id：用于标识该Profiler组件，用于区分不同的Profiler组件。
//phase：用于标识该Profiler组件的渲染阶段，有三个阶段：
        //WARM：表示该Profiler组件的渲染时间和内存使用情况已经被缓存，不会再次渲染。
        //RUM：表示该Profiler组件的渲染时间和内存使用情况已经被缓存，不会再次渲染。
        //COMMIT：表示该Profiler组件的渲染时间和内存使用情况已经被缓存，不会再次渲染。
//actualDuration：表示该Profiler组件的实际渲染时间，单位为毫秒。
//baseDuration：表示该Profiler组件的基准渲染时间，单位为毫秒。
//startTime：表示该Profiler组件的开始渲染时间，单位为毫秒。
//commitTime：表示该Profiler组件的结束渲染时间，单位为毫秒。
//4.在onRender回调函数中，我们可以根据这些参数来分析我们的应用程序的性能。

root.render(
    <React.StrictMode>
        <Profiler id={"app"} onRender={renderCallback}>
            <App />
        </Profiler>

    </React.StrictMode>

);
