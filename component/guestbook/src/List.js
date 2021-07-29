import React from 'react';
import list from './data.json';
import Item from './Item';
//import styles from './assets/css/List.css';
import styles from './assets/scss/List.scss';

export default function List(){
    return(
        <ul className={styles.Guestbook__List}>
            {list.map(item => <Item key={item.no} name={item.name} message={item.message} regDate={item.regDate}/>)}
        </ul>
    );
}