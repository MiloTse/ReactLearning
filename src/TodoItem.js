import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    //作用域放到构造器保证只会渲染一次，提升性能
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // setState 降低虚拟DOM的渲染次数
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        }else {
            return false;
        }
    }

    render() {
        console.log('child render');
        const { content } = this.props;
        // JSX -> createElement -> virtual DOM(JS object)->  Real DOM;
        // return <div><span>item</span></div>
        //  return React.createElement('div', {}, React.createElement('span',{},'item'));

        return (
            <div onClick={this.handleClick}>
                {content}
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



export default TodoItem;