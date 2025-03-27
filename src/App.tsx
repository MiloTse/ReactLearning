//TypeScript是给每一个变量、形式参数、函数(入参和返回值)定义明确的类型
//1-能够提供更好的语法提示
//2.能够检测出潜在的问题
//实际参数不需要类型，形式参数需要类型
type ChildProps = {
    age: number
}
//函数组件，Props类型如何定义
function Child( { age }: ChildProps) {
    // const { age } = props;
    return <div>{age.toString()}</div>
}

function App() {
    const dom = <div>dom</div>
  return (
    <div>
        <Child age={18} dom={dom} />
    </div>
  );
}

export default App;
