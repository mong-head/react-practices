import React from 'react';
import '../assets/css/App.css';
import styles from '../assets/css/TaskList.css';

export default function Task({name,done}){
    return(
        <li className={styles.TaskList__Task}>
            <input type='checkbox' checked={done} />
            {name}
            <a href='#' class='TaskList__Task--remove'></a>
        </li>
    );
};
