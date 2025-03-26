
const promise = new Promise(()=>{}, ()=>{});

function getData(){
    throw promise;
}
function Todos(){
    const data = getData();
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default Todos;
