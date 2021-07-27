import React from 'react';

export default function(){
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();

    return (
        <div>
            {("0"+(hour > 12 ? hour - 12: hour)).slice(-2)}
            {' : '} 
            {("0"+minute).slice(-2)} 
            {' : '} 
            {("0"+sec).slice(-2)}
            {hour>12 ? 'PM' : 'AM'}
        </div>
    );  
}