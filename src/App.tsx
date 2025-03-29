
const App = ()=> {
    function handleClick(e: React.MouseEvent) {
        console.log(e.target);
    }

    return (
            <div onClick={handleClick}>Hello World</div>
    )
}


export default App;