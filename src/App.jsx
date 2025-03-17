import Hello from './Hello.jsx';
import Bye from './Bye.jsx';


//pure component
//1.职责明确
//2.给固定的输入固定的输出
function App (){

    const status = true;
    //JSX is not HTML
    return(
        <>

            <Hello show={status}  />

            <Bye show={status}  />
         </>
    );
}

export default App;