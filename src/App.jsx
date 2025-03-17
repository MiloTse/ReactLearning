import Hello from './Hello.jsx';
import Bye from './Bye.jsx';
function App (){

    const text = 'This is text';
    const flag = true;

    const helloMsg = 'Hello aaa';
    const byeMsg = 'Bye Warren';
    const showMsg = true;
    //JSX is not HTML
    return(
        <>

            <Hello show={showMsg} msg={helloMsg}/>

            <Bye show={showMsg} msg={byeMsg}/>
         </>
    );
}

export default App;