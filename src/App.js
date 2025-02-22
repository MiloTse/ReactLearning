import React, { Component, Fragment} from 'react';
import './style.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
        this.handleAddItem = this.handleAddItem.bind(this);

    }
    render() {
        return (
            //use Fragment to render as one element
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div key={index}> {item}</div>
                            )
                        })
                    }

                </TransitionGroup>


                <botton onClick={this.handleAddItem}>toggle</botton>

            </Fragment>

        )
    }
    handleAddItem(){
        this.setState(
            (prevState)=>{
                return {
                    list: [...prevState.list, 'item']
                }
            }
        )
    }
}

export default App;