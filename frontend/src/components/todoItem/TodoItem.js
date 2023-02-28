import { React, useState } from 'react'
import UpdateTodo from '../updateTodo/UpdateTodo';
import DeleteTodo from '../deleteTodo/DeleteTodo';

const TodoItem = ({ todo, handleUpdateTodo, deleteTodo }) => {
  const [isEditing, setEditing] = useState(false);

  const onUpdated = (updatedTodo) => {
    handleUpdateTodo(todo.id, updatedTodo);
    setEditing(false);
  };

  const handleToggle = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    handleUpdateTodo(todo.id, updatedTodo);
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
          handleCancel={handleCancel}
        />
      ) : (
        <div className='todoItem'>
          <input
            className='todoCheckbox'
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <h3 className='todoTitle'>{todo.title}</h3>
          {/* <span>completed: </span> */}
          <button
            className='btn '
            onClick={handleEdit}>
            <i className="fa-regular fa-pen-to-square"></i>
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