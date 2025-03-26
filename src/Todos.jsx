let promiseStatus = "pending";
//第一个参数是触发函数
//第二个参数是拒绝函数
const promise = new Promise((resolver)=>{
    setTimeout(()=>{
        resolver();
        promiseStatus = "resolved";
    }, 1000);
}, ()=>{});

function getData(){
    if(promiseStatus === "pending") {
        throw promise;
    }else {
        return 'Hello World';
    }


}
function Todos(){
    //当发现throw promise的时候，会把promise作为错误对象抛出
    //每间隔一段时间就会重新执行getData函数
    //直到promise被resolve或者reject
    //如果promise被resolve，那么getData函数就会返回promise的结果
    //如果promise被reject，那么getData函数就会抛出promise的错误对象
     const data = getData();//throw promise
    return (
        <div>
            <p>{data}</p>
        </div>
    )
}

export default Todos;
