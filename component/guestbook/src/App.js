import React from 'react';
import Guestbook from './Guestbook';
import './assets/css/App.css'

export default function App(){
    return (
        <div className={'App'}>
            <div>
                <Guestbook />
            </div>
            {/* Dialog는 구현 X */}
        </div>
    );
}