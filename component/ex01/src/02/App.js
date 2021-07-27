import React, {Component} from 'react';
import FoodList from './FoodList';

export default class extends Component{
    constructor(){
        super(...arguments);
        // key 필요 : DOM이 변경될 때마다 key가 없으면 내용이 바뀌었음에도 같은 component개수면 변경안할 수 있음
        this.foods = [
            {no: 1, name: 'bread', quantity: '50'},
            {no: 2, name: 'milk', quantity: '5'},
            {no: 3, name: 'egg', quantity: '10'},
        ]
    }
    render(){
        return (
            <div id='App'>
                <FoodList foods={this.foods}/>
            </div>
        );
    }
}