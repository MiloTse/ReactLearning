
function dataReducer(state, action) {
    const newState = {...state};
    switch (action.type) {
        case 'changeInput':
            newState.inputValue=action.value;
            return newState;
        case 'addItem':
            newState.list = [...newState.list,{
                id: state.inputValue,
                value: state.inputValue,//value 从原始的state 中获取
            }]
            newState.inputValue = '';
            return newState;
        case 'deleteItem':
            //copy the list
            newState.list = [...newState.list];
            newState.list.splice(action.value, 1);
            return newState;
        default:
            return state;
    }
    return state;
}


export default dataReducer