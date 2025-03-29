
const App = ()=> {
    function handleClick(e: React.MouseEvent) {
        console.log(e.currentTarget.innerHTML);
    }

    //define the changeEvent was triggered by input element
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(e.target.value);
    }
    function handleInputChange2(e: React.ChangeEvent) {
        console.log(e.currentTarget.nodeValue);// output is null;
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>Hello World</div>
                <input onChange={handleInputChange}/>
                <input onChange={handleInputChange2}/>
            </div>

        </>

    )
}


export default App;