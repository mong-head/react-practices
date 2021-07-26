import React from 'react';

export default function(){
    const date = new Date();
    let hour = date.getHours();
    const minute = ('0'+ date.getMinutes()).slice(-2);
    const sec = ('0'+ date.getSeconds()).slice(-2);

    let session = 'AM'
    if(hour > 12){
        hour -= 12;
        session = 'PM'
    }
    hour = ('0'+ hour).slice(-2);
    return (
        <div>
            {hour} 
            : 
            {minute} 
            : 
            {sec} 
            {session}
        </div>
    );  
}