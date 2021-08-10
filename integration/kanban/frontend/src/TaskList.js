import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function TaskList({cardNo, tasks, notifyTask /* callback */}){
    return(
        <div className={styles.TaskList}>
            <ul>
                {tasks.map(task => <Task key={task.no} name={task.name} done={task.done}/>)}
            </ul>
            <br/>
            <input 
                type='text' 
                placeholder={'add a task'} 
                className={styles.TaskList_input_add_task}
                onKeyPress={(event)=>{
                    if(event.key == 'Enter'){
                        notifyTask.add(cardNo,event.target.value);
                        event.target.value = ''
                    }
                }}
            />
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}
