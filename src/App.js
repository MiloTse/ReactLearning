import React, { Component, Fragment} from 'react';
import './style.css'


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
                <div className={this.state.show? 'show' : 'hide'}>hello</div>
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