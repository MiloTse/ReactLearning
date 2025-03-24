
function App() {
    //请求外部数据
    fetch('http://localhost:3000/a.json').then(()=>{
        console.log('abc')
    })

    return (
            <div>
               Hello World
            </div>
        )
}
export default App;