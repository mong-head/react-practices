import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Gallery(){
    const selectedStyle = {
        backgroundColor: 'blue',
        color: 'white'
    }
    return (
        <div>
            <h1>Gallery</h1>
            <ul>
                <li><NavLink to={'/'} activeStyle={selectedStyle}>[Main]</NavLink></li>
                <li><NavLink to={'/guestbook'} activeStyle={selectedStyle}>[Guestbook]</NavLink></li>
                <li><NavLink to={'/gallery'} activeStyle={selectedStyle}>[Gallery]</NavLink></li>
            </ul>
        </div>
    )
}