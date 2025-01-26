import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content, test } = this.props;
        // JSX -> createElement -> virtual DOM(JS object)->  Real DOM;
        // return <div><span>item</span></div>
        //  return React.createElement('div', {}, React.createElement('span',{},'item'));

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


    //一个组件要从父组件接受参数
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    //当这个组件即将被从页面中剔除的时候，会被执行
     componentWillUnmount() {
        console.log('child componentWillUnmount');
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