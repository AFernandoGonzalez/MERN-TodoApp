import { React, useState } from 'react'
import UpdateTodo from '../updateTodo/UpdateTodo';
import DeleteTodo from '../deleteTodo/DeleteTodo';

const TodoItem = ({ todo, handleUpdateTodo, deleteTodo }) => {
  const [isEditing, setEditing] = useState(false);

  const onUpdated = (updatedTodo) => {
    handleUpdateTodo(todo.id, updatedTodo);
    setEditing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <UpdateTodo todo={todo} handleUpdateTodo={onUpdated} handleCancel={handleCancel} />
      ) : (
        <div>
          <h3>{todo.title}</h3>
          <span>completed: {todo.completed.toString()}</span>
          <button onClick={handleEdit}>Edit</button>
          <DeleteTodo todo={todo} deleteTodo={deleteTodo} />
        </div>
      )}
    </li>
  );
}

export default TodoItem