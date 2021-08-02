import React, {Component} from 'react';
import MyComponent from './MyComponent';

export default function App(){
    return (
        <div id='App'>
            <MyComponent 
                /* props01={ 10 } : Not Required, Set default value*/
                props02={ 1 }
                props03={ true }
                props04={ {no: 1, name:'hihi'} }
                props05={ [1,2,3,4,5] }
                props06={ () => '함수' }
                props07={ 1 }
                props08={ [true,false] }
                props09={ {
                    no: 15,
                    name: 'yujin',
                    email: 'yujin@gmail.com'
                } }
            />
        </div>
    );
}