import React, { useState,useEffect } from "react";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
//import data from "./assets/json/data.json"

// stateful Component

export default function EmaillistApp() {
	console.log('rendering..... Emaillist...');
    const [keyword, setKeyword] = useState('');
	const [emails, setEmails] = useState([]);

	useEffect(async() => {
        try{
			// backend 로 보내기
            const response = await fetch('/api', {
                method: 'get',
                mode: 'same-origin', //cors:    다른 도메인인 경우, same-origin: 같은 도메인인 경우
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
			console.log(json.data);
            setEmails(json.data);
        } catch(e){
            console.log(e);
        }
    }, []); // mount

    const notifyKeywordChanged = function(keyword){
        setKeyword(keyword);
    }

	return (
		<div className={`EmaillistApp`}>
			<SearchBar keyword={keyword} callback={notifyKeywordChanged}/>
			<Emaillist keyword={keyword} emails={emails} />
		</div>
	);
}
