import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content, test } = this.props;
        return (
            <div
                onClick={this.handleClick}>

                {test} - {content}
            </div>
        )
    }


    handleClick() {
        {/*child component invoke parent component's func should bind this on parent component*/}
/*        this.props.deleteItem(this.props.index);
        alert(this.props.index);*/

        const { deleteItem, index} = this.props;
        deleteItem(index);
    }
}

//对TodoItem组件的属性进行类型检查
//可以使用PropTypes.oneOfType([PropTypes.string, PropTypes.number])来检查属性值的类型
// PropTypes.string.isRequired表示content属性是必填的
// PropTypes.func.defaultValue表示deleteItem属性是可选的，默认值为null
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello word'
}

export default TodoItem;