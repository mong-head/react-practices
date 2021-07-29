import React from 'react';
import AddForm from './AddForm';
import List from './List';
//import styles from './assets/css/Guestbook.css';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook(){
    return(
        <div className={styles.Guestbook}> 
            <h1>방명록</h1>
            <AddForm />
            <List />
        </div>
    );
}
