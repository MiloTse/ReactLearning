import React, { Component, Fragment} from 'react';
import './style.css'
import {CSSTransition} from "react-transition-group";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.handleToggle = this.handleToggle.bind(this);

    }
    render() {
        return (
            //use Fragment to render as one element
            <Fragment>
                <CSSTransition
                    in={this.state.show}
                    timeout={1000}
                    classNames='fade'
                    onEnterd={(el)=>{el.style.color='blue'}}
                    appear={true}
                >

                    <div >hello</div>
                </CSSTransition>

                <botton onClick={this.handleToggle}>toggle</botton>

            </Fragment>

        )
    }
    handleToggle(){
        this.setState(
            {
                show : this.state.show ? false : true
            }
        )
    }
}

export default App;