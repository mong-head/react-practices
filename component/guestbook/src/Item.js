import React,{Fragment} from 'react';
//import styles from './assets/css/ListItem.css';
import styles from './assets/scss/ListItem.scss';

export default function Item({name,message}){
    return(
        <li className={styles.Guestbook__List__Item}>
            <strong>{name}</strong>
            <p>
                {message && message.split('\n').map((line,index)=> index > 0 ? 
                    <Fragment key={index}>
                        <br/>
                        {line}
                    </Fragment>: line)}
            </p>
            <strong></strong>
            <a href=''>삭제</a>
        </li>
    );
}
