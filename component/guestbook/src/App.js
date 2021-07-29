import React from 'react';
import Guestbook from './Guestbook';
import './assets/css/styles.css'

export default function App(){
    return (
        <div id='App'>
            <Guestbook />
            {/* Dialog는 구현 X */}
        </div>
    );
}