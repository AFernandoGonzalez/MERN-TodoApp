import { React, useState } from 'react'
import UpdateTodo from '../updateTodo/UpdateTodo';
import DeleteTodo from '../deleteTodo/DeleteTodo';

const TodoItem = ({ todo, handleUpdateTodo, deleteTodo }) => {
  const [isEditing, setEditing] = useState(false);

  const onUpdated = (updatedTodo) => {
    handleUpdateTodo(todo.id, updatedTodo, !todo.completed);
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className='todoItem-container'>
      {isEditing ? (
        <UpdateTodo
          todo={todo}
          handleUpdateTodo={onUpdated}
          handleCancel={handleCancel} />
      ) : (
        <div className='todoItem'>
          <h3 className='todoTitle'>{todo.title}</h3>
          <span>completed: </span>
          <input
            className='todoCheckbox'
            type="checkbox"
            checked={todo.completed}
            onChange={onUpdated}
          />
          <button
            className='btn '
            onClick={handleEdit}>
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
          <DeleteTodo
            todo={todo}
            deleteTodo={deleteTodo}
          />
        </div>
      )}
    </div>
  );
}

export default TodoItem