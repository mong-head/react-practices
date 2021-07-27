import React from 'react';

// X

export default function(){
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const sec = date.getSeconds();

    const contentHtml = 
    "<span>" +
        ("0"+(hour > 12 ? hour - 12: hour)).slice(-2) +
        ' : ' +
        ("0"+minute).slice(-2) +
        ' : ' +
        ("0"+sec).slice(-2) +
        //hour>12 ? 'PM' : 'AM' +
    "</span>";

    return (
        //
        // HTML Tag dynamic하게 생성해서 JSX에 추가하는 작업은 기본적으로 금지(XSS 공격 방지 기능 내장)
        <div>
            {contentHtml}
        </div>
    );  
}