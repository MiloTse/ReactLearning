//TypeScript是给每一个变量、参数、函数定义明确的类型

type ChildProps = {
    age: number
}

function Child(props: ChildProps) {
    const { age } = props;
    return <div>{age.toString()}</div>
}

function App() {
  return (
    <div>
        <Child age={null} />
    </div>
  );
}

export default App;
