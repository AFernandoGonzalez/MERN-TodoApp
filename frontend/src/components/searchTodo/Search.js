import { React, useState } from 'react'

const Search = ({ handleSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className='search-container'>
            <label >Search: </label>
            <input
                type="text"
                id="search"
                value={searchValue}
                onChange={handleChange}
            />
        </div>
    )
}

export default Search