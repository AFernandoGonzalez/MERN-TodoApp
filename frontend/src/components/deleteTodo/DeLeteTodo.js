import React from 'react'

const DeleteTodo = ({ todo, deleteTodo }) => {

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.id);
  };

  return (
    <form onSubmit={handleDelete}>
      <button type="submit">Delete</button>
    </form>
  );
}

export default DeleteTodo