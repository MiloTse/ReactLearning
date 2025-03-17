function Hello({ msg, show}){ //解构
    return  show ? <div> {msg} </div> : null;

}

export default Hello;
