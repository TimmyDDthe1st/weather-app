import React, { useState } from 'react';

const SearchForm = ({onSearchButtonPress}) => {
    const [searchText, setSearchText] = useState("Manchester");

    const handleInput = (e) => {
        setSearchText(e.target.value)
    }

    return <div className="search-form">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" onChange={handleInput}></input>
        <button type="submit" onClick={() => {onSearchButtonPress(searchText)}}>Search</button>
    </div>
};



export default SearchForm;