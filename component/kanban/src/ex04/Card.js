import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import styles from '../assets/scss/Card.scss';

export default function Card({title,description,status, tasks}){

    // Card Side Bar Color
    // ToDo : 초록색, Doing: 주황색, Done: 검은색
    const styleSideColor = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 3,
        bottom: 0,
        backgroundColor: 
                        status == 'ToDo' ? '#3e7e28' :
                        status == 'Doing'? '#bd8031' : '#222'
    }

    const [showDetails, setShowDetails] = useState(true);
    return(
        <div className={styles.Card}>
            <div style={ styleSideColor } />
            <div className={ 
                showDetails ? 
                [styles.Card__Title , styles['Card__Title--is-open']].join(' ') :
                styles.Card__Title 
            }
                onClick={()=> {setShowDetails(!showDetails)}}
            >
                {title}
            </div>
            { showDetails ? 
                <div className={styles.Card__Details}>
                    {description}
                    <TaskList tasks={tasks}/>
                </div>
                : null
            }
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string, 
    tasks: PropTypes.arrayOf(PropTypes.object)
}