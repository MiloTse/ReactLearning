
function Child({age}) {
    return <div>{age.toString()}</div>
}

function App() {
  return (
    <div>
        <Child age={18} />
    </div>
  );
}

export default App;
