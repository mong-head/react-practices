import React, {Fragment, useEffect, useState} from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbanBoard.css';

export default function KanbanBoard(){

    const [cards, setCards] = useState([]);
    
    useEffect(async ()=>{
        try{
            const response = await fetch('/api/cards',{
                method:'get',
                headers:{'Content-Type':'application/json'}});
            
            // 통신 실패시
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`); // ex) 404: error content
            }

            const json = await response.json();

            // 데이터 가지고 오기 실패시
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            console.log(json.data);
            setCards(json.data);  
        } catch(err){   
            console.error(err);
        }
    },[]);

    const notifyTask = {
        add: async function(cardNo,taskName){
            const url = `/api/card/${cardNo}/task`;
            const task = {
                no:null,
                name:taskName,
                done:false
            }

            const response = await fetch(url, {
                method:'post',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(task)
            })
            console.log(response);
        },
        delete: function(){},
        changeStatus: function(){}
    }

    return (
        <div className={styles.KanbanBoard}>
            <CardList key="ToDo" title={'ToDo'} cards={cards.filter(card => card.status == 'ToDo')} notifyTask={notifyTask}/>
            <CardList key="Doing" title={'Doing'} cards={cards.filter(card => card.status == 'Doing' )} notifyTask={notifyTask}/>
            <CardList key="Done" title={'Done'} cards={cards.filter(card => card.status == 'Done' )} notifyTask={notifyTask}/>
        </div>
    );
};
