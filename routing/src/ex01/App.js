import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Gallery from './component/Gallery';
import Main from './component/Main';
import Guestbook from './component/Guestbook';

export default function () {
    return (
        <HashRouter>
            <Route exact path='/' component={Main} />
            <Route path='/guestbook' component={Guestbook} />
            <Route path='/gallery' component={Gallery} />
        </HashRouter>
    );
}