
const App = ()=> {
    function handleClick(e: React.MouseEvent) {
        console.log(e.currentTarget.innerHTML);
    }
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>Hello World</div>
                <input onChange={handleInputChange}/>
            </div>

        </>

    )
}


export default App;