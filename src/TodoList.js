import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
 import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        //当组件的state或者props发生的时候，render函数就会重新执行
        this.state = {/*state是组件内部的状态，组件内部的状态改变，组件会重新渲染*/
            inputValue: '',
            list: []
        }

        //optimize the performance
        // bind the this to the component
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);

    }

    //在组件即将被挂载到页面的时刻自动执行
    componentWillMount() {
        console.log('componentWillMount');
    }


    render() {
        console.log('render');
        return (
            <Fragment>
            <div>
                <label htmlFor="insertArea" >Input Content </label>
                <input
                    id="insertArea"
                    type="text"
                    className="input"
                    placeholder="write something"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    ref={(input) => {this.input = input}}
                />
                <button onClick={this.handleBtnClick}>Submit</button></div>
            <ul ref={(ul) => {this.ul = ul}}>
                {

                   this.getTodoItem()




                }



            </ul>
        </Fragment>
    );
  }


    //组件被挂载到页面之后，自动被执行
    componentDidMount() {
        console.log('componentDidMount');
    }

    //组件被更新之前， 他会被自动仔细-也是生命周期函数
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    //组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后
    // 如果shouldComponentUpdate返回true它才执行
    // 如果返回false，这个函数就不会被执行了
    componentWillUpdate() {
        console.log('componentWillUpdate');
     }

     //组件更新完成之后，它会被执行
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    //
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }


  getTodoItem(){
    return(
        // avoiding use index as key, for avoiding inconsistency
        //key={index} -> key={item}
        this.state.list.map((item, index) => {
            return (
                    <TodoItem
                        key={item}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
            )
        })

  )
  }

  handleInputChange(e) {
      // eslint-disable-next-line no-lone-blocks
      {
          //need to use setState to change the state
        // can not directly change the state @Date: 2025-01-21*/
      }

      console.log(e.target);
      //new way to set the state
      const value = this.input.value;
      // const value = e.target.value;
      //new way to set the state
      this.setState(()=>({
              inputValue: value
          })
      )













      //old way to set the state
      this.setState({
            inputValue: e.target.value
      })
      console.log(this);//need to use bind() function to bind the this to the component
        // this.state.inputValue = e.target.value;
        // console.log(e.target.value);
  }

  handleBtnClick() {
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            //empty the input value
            inputValue: ''
        })
            ,()=>{
            //should put here inside callback function
            //this will exec after the setState function
             console.log(this.ul.querySelectorAll('div').length);
            }
        )

        //should not put here
        console.log(this.ul.querySelectorAll('div').length);


/*        this.setState({
            list: [...this.state.list, this.state.inputValue],
            //empty the input value
            inputValue: ''
        })*/
  }

    handleItemDelete(index){
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });







/*
        // expend the list and merge the list. copyOf
         const list = [...this.state.list];
        //delete the item at the index, delete one item
        list.splice(index, 1);
        this.setState({
            //change the copy list instead of this.state.list
            // immutable: state not allow to be changed directly
            list: list
        })*/
        console.log(index);
    }
}


export default TodoList;