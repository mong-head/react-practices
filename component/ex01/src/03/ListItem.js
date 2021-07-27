import React, {Component} from 'react';

export default function ListItem(props){
    return (
        <li>{props.name} : {props.quantity}</li>
    );
}