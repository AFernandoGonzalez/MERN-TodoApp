import React from 'react'
import '../../styles/components/_buttons.scss'

const DeleteTodo = ({ todo, deleteTodo }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.id);
  };

  return (
    <div className='delete-container'>
      <form className='form' onSubmit={handleDelete}>
        <button className='btn btn-danger' type="submit"><i class="fa-solid fa-trash"></i></button>
      </form>
    </div>
  );
}

export default DeleteTodo