import {React, useState} from 'react'

const Sort = ({ handleSort }) => {
    const [sortValue, setSortValue] = useState("newest");


    const handleChange = (e) => {
        setSortValue(e.target.value);
        handleSort(e.target.value);
      };

    return (
        <div className='filter-container'>
            <span>Sort by</span>
            <select id="filter" value={sortValue} onChange={handleChange}>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="shortest">Shortest</option>
                <option value="longest">Longest</option>
            </select>
        </div>
    );
};

export default Sort