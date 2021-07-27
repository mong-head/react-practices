import React from 'react';

// O

export default function(){
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();

    return (
        /*
            comment01 : component안이 아니라서 JS구분 가능
        */
        <div 
            /*
                comment02 : 여기서도 다중행 주석 가능함 (추천 X)
            */
            className='clock' 
            title='시계' 
            props01='hello' 
            props02='world'>
            {/* <!-- 주석입니다. --> : error - JSX != HTML */}
            // comment03 : JSX component 내에서 주석 사용하면 화면에 그대~로 나옴
            {/* comment04: 이런 방식으로 표현식이 실행되는 블록안에서 주석 달아야 함 */}
            {("0"+(hour > 12 ? hour - 12: hour)).slice(-2)}
            {' : '} 
            {("0"+minute).slice(-2)} 
            {' : '} 
            {("0"+sec).slice(-2)}
            {hour>12 ? 'PM' : 'AM'}
        </div>
    );  
}