import React, {Component, Fragment} from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {/*state是组件内部的状态，组件内部的状态改变，组件会重新渲染*/
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
            <div>
                <input value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleBtnClick.bind(this)}>Submit</button></div>
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return (
                        <li
                            key={index}
                            onClick={this.handleItemDelete.bind(this, index)}
                        >
                            {item}
                        </li>
                        )
                    })
                }



            </ul>
        </Fragment>
    );
  }

  handleInputChange(e) {
        // need to use setState to change the state
        // can not directly change the state @Date: 2025-01-21
        this.setState({
            inputValue: e.target.value
        })
        console.log(this);//need to use bind() function to bind the this to the component
        // this.state.inputValue = e.target.value;
        // console.log(e.target.value);
  }

  handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            //empty the input value
            inputValue: ''
        })
  }

    handleItemDelete(index){
        // expend the list and merge the list. copyOf
         const list = [...this.state.list];
        //delete the item at the index, delete one item
        list.splice(index, 1);
        this.setState({
            //change the copy list instead of this.state.list
            // immutable: state not allow to be changed directly
            list: list
        })
        console.log(index);
    }
}


export default TodoList;