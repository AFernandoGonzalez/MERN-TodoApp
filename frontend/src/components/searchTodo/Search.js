import { React, useState } from 'react'
import './Search.scss'

const Search = ({ handleSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className='search-container'>
            <div className='searchbar'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                    type="text"
                    id="search"
                    value={searchValue}
                    onChange={handleChange}
                />
            </div>
            <div className='hr'></div>
        </div>
    )
}

export default Search