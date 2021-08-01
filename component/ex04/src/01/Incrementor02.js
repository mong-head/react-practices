import React, {Component, useState} from 'react';

export default function Incrementor02({begin,step}){
    // init
    const [value, setValue] = useState(begin);

    const onClickButton = function(){
        setValue(value + step);        
    }
    return(
        <div>
            <button onClick={onClickButton}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{value}</span>
        </div>
    );
}