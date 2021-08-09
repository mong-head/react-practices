import React from 'react';
import PropTypes from 'prop-types'

// Pure Component

export default function SearchBar({ keyword, callback }) {

    console.log('Rendering...SearchBar');   //keyword변경될 때마다 SearchBar 새로 만들어지는 것

    const handleChange = function(e){
        callback(e.target.value);
    }

    return(
        <div className={`Searchbar`}>
            찾기: <input type='text' placeholder='search' value={keyword} onChange={ handleChange }/>
        </div>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired
}