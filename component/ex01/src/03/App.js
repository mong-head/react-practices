import React, {Component} from 'react';
import FoodList from './FoodList';

export default function App(){
    const foods = [
        {no: 1, name: 'bread', quantity: '50'},
        {no: 2, name: 'milk', quantity: '5'},
        {no: 3, name: 'egg', quantity: '10'},
    ];
    return (
        <div id='App'>
            <FoodList foods={foods}/>
        </div>
    );
    
}