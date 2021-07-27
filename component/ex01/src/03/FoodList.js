import React, {Component} from 'react';
import ListItem from './ListItem';

export default function FoodList({foods}/* 객체 분해 */){
    return (
        <ul>
            {foods.map((food)=><ListItem key={food.no} name={food.name} quantity={food.quantity} />)}
        </ul>
    );
}