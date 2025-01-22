import React, {Component} from "react";


class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div
                onClick={this.handleClick}>
                {this.props.content}
            </div>
        )
    }


    handleClick() {
        {/*child component invoke parent component's func should bind this on parent component*/}
        this.props.deleteItem(this.props.index);
        alert(this.props.index)
    }
}


export default TodoItem;