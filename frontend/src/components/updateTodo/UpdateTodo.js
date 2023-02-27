import { React, useState } from 'react'

const UpdateTodo = ({ todo, handleUpdateTodo, handleCancel }) => {
  const [newTitle, setNewTitle] = useState(todo.title);
  console.log(newTitle);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = { ...todo, title: newTitle };
    handleUpdateTodo(updatedTodo);
  };

  return (
    <div className='updateTodo-container'>
      <form className='form'
        onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Update Todo...'
          value={newTitle}
          onChange={handleChange}
        />
        <button className='button'
          onClick={handleCancel}>Cancel
        </button>
        <button className='button' type='submit' >Update
        </button>
      </form>
    </div>
  );
}

export default UpdateTodo