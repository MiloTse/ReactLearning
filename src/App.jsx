import Header from "./Header/Header";
import Body from "./Body/Body";
import nameContext from "./nameContext";


function App() {
      return (
         <div>
                <nameContext.Provider value="warren">
                    <Header/>
                    <Body />
                </nameContext.Provider>

         </div>
    )
}
export default App;