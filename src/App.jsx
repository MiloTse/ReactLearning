import Header from "./Header/Header";
import Body from "./Body/Body";



function App() {
    const username = "Warren";
    return (
         <div>
                <Header/>
                <Body nameBody={username}/>

         </div>
    )
}
export default App;