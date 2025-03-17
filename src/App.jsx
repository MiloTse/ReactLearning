import Hello from './Hello.jsx';
import Bye from './Bye.jsx';
function App (){

    const text = 'This is text';
    return(
        <>
            <div>Lesson 12</div>
            <span>span</span>
            <Hello />
            <h1>{text}</h1>
            <Bye />
        </>
    );
}

export default App;