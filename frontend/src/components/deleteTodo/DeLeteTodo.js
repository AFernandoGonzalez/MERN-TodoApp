import React from 'react'

const DeleteTodo = ({ todo, deleteTodo }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.id);
  };

  return (
    <div className='delete-container'>
      <form className='form' onSubmit={handleDelete}>
        <button className='button' type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteTodo