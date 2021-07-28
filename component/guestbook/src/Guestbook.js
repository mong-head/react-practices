import React from 'react';
import AddForm from './AddForm';
import List from './List';

export default function Guestbook(){
    return(
        <div className='Guestbook'> 
            <h1>방명록</h1>
            <AddForm />
            <List />
        </div>
    );
}
