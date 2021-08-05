import React, { Fragment,useState } from 'react';
import LifeCycle from './LifeCycle';

export default function () {
    const [color, setColor] = useState('#000');
    let visible = true;
    const handleClick = function(e){
        // #998811

        const color = Math.floor(Math.random() * 16777216).toString(16); //16777215:(=0xffffff) 색 개수,toString(16):16진수로 String변환
        setColor(`#${color}`);

        console.log(color);
    }
    return (
        <Fragment>
            <h2>EX05: Component LifeCycle</h2>
            <button onClick={ handleClick }>색상변경</button>
            <br />
            { visible ? <LifeCycle color={color}/> : null}
        </Fragment>
    );
}