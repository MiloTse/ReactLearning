import Hello from './Hello.jsx';
import Bye from './Bye.jsx';
function App (){

    const text = 'This is text';
    const flag = false;

    const helloMsg = 'Hello';
    const byeMsg = 'Bye Warren';
    //JSX is not HTML
    return(
        <>
            <div>Lesson 12</div>
            <span>span</span>
            <Hello msg={helloMsg}/>
            <h1>{text}</h1>
            <Bye msg={byeMsg}/>
            <div>{flag? 'a true' : 'a false'}</div>
        </>
    );
}

export default App;