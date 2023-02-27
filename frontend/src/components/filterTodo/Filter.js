import {React, useState} from 'react'

const Filter = ({ handleFilter }) => {
  const [filterValue, setFilterValue] = useState("all");

  const handleChange = (e) => {
    setFilterValue(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <div className='filter-container'>
      <label >Filter: </label>
      <select id="filter" value={filterValue} onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}

export default Filter