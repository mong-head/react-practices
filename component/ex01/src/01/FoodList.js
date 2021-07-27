import React, {Component} from 'react';
import ListItem from './ListItem';

export default class FoodList extends Component{
    render(){
        return (
            <ul>
                <ListItem name='bread' quantity='50'/>
                <ListItem name='milk' quantity='5' />
                <ListItem name='egg' quantity='10' />
            </ul>
        );
    }
}