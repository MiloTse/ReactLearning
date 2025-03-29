
const App = ()=> {
    function handleClick(e) {
        console.log(e.target.innerHTML);
    }

    return (
            <div onClick={handleClick}>Hello World</div>
    )
}


export default App;