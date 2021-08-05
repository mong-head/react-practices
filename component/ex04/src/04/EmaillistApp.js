import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import data from "./assets/json/data.json";

// stateful Component

export default function EmaillistApp() {
    const [keyword, setKeyword] = useState('');
	const [emails] = useState(data);

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
