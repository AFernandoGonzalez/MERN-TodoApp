import { React, useState } from 'react'

const UpdateTodo = ({ todo, handleUpdateTodo, handleCancel }) => {
  const [newTitle, setNewTitle] = useState(todo.title);

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
        <button className='btn btn-primary' type='submit' >
          <i className="fa-solid fa-check"></i>
        </button>
      </form>
      <button className='btn btn-danger'
        onClick={() => handleCancel()}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default UpdateTodo