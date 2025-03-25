
function App() {
    const list=['Do homework','CleanRooms','Coding','wateringFlower'];
    return (
            <div >
                <div>
                    name: <input/>
                </div>
                <div>
                    search: <input/>
                </div>
                <div>
                    <select>
                        {
                            list.map((item,index)=>{
                                return <option key={index} value={index}>{item}</option>
                            })
                        }
                    </select>
                </div>


            </div>
    )
}

export default App;



































