import React from 'react';
import list from './data.json';
import Item from './Item';

export default function List(){
    return(
        <ul className="Guestbook__List">
            {list.map(item => <Item key={item.no} name={item.name} message={item.message} regDate={item.regDate}/>)}
        </ul>
    );
}