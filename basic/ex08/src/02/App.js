import React from 'react';

export default function(){
    /**
     * react component: only rendering a single root node
     * error: 
     *  전체 감싸는 div없이 h2, p 등 여러 element를 return하는 경우
     *      return(
     *          <h2>App02</h2>
     *          <p>hi</p>
     *      )
     * 
     */
    return (
        <div id='App'>
            <h2>App 02</h2>
            {React.createElement('p',{id:'test',className:'p_test'},'hi~~')}
        </div>
    );
}