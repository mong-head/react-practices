import React, {Component} from 'react';

export default class Incrementor01 extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            value: this.props.begin
        }
    }
    onClickButton(){
        this.setState({
            value: this.state.value + this.props.step
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.value}</span>
            </div>
        );
    }
}