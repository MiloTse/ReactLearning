import {useState, useMemo, useEffect} from "react";


function App() {
    const list=['Do homework','CleanRooms','Coding','wateringFlower'];
    const [name,setName]= useState('');
    const [search,setSearch]= useState('');
    // const filteredList= list.filter(item=> item.indexOf(search) !== -1);

    //search 发生变化的时候才会计算，name发生变化不计算
    //useMemo 是一个优化手段，当依赖项没有发生变化的时候，不会重新计算，提高性能. 相当于做了一个缓存
    //useMemo 第一个参数是一个函数，第二个参数是一个数组，数组里面是依赖项，当依赖项发生变化的时候，才会重新计算
    const filteredList = useMemo(
        ()=> {

            return list.filter(item=> item.indexOf(search) !== -1);
            //eslint-disable-next-line
        },[search]
    );
    console.log('step1');

    //useEffect 相当于 componentDidMount 和 componentDidUpdate 的结合
    //useEffect 第一个参数是一个函数，第二个参数是一个数组，数组里面是依赖项，当依赖项发生变化的时候，才会重新计算
    //useEffect 是在render 结束之后执行的
    useEffect(()=>{
        console.log('step3');
    },[])
    console.log('step2');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }



    return (
            <div >
                <div>
                    name: <input value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    search: <input value={search} onChange={handleSearchChange}/>
                </div>
                <div>
                    <select>
                        {
                            filteredList.map((item,index)=>{
                                return <option key={index} value={index}>{item}</option>
                            })
                        }
                    </select>
                </div>


            </div>
    )
}

export default App;



































