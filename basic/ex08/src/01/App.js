import React from 'react';

export default function(){
    return (
        <div>
            {/* 주석은 이렇게 달자 */}
            <h2>JSX tutorial</h2>
            <p>01. 특징 1: HTML과 차이점</p>
            {/* 
                1. 속성은 Camel Cased (maxLength)
            */}
            <input type='text' maxLength='10' /> {/* '/'로 꼭 닫아주기 : element 자식 찾을 수 있게*/}
            {/* 
                2. Element는 꼭 닫혀야 함
                    error) <br>, <hr>, <input ~~ >, <img src=~~ >
                    good) <br/>, <hr/>, <input ~~ />, <img src=~~ />
            */}
            <br/>
            <hr/>
            <img
                width='5%' 
                src='data:image/jpeg;base64,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' 
            />
            {/* 
                3. 속성 이름: based on DOM API 
                    HTML : <div id='box' class='box'></div>
                    document.getElementById('box').className= 'box'

                    이 className때문에 Camel Case 관례 생김
                    document.getElementById('box').maxLength= 10
            */}
            <div id={'box'} className='box'>
                box입니다.
            </div>
            
        </div>
    );
}