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
                <button>Submit</button></div>
            <ul>
                <li>Learn English</li>
                <li>Learning React</li>
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
}

export default TodoList;