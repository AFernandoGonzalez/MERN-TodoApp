import { React, useState } from 'react';
import TodoItem from '../todoItem/TodoItem';


const TodoList = ({ todos, handleUpdateTodo, deleteTodo }) => {



  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          handleUpdateTodo={handleUpdateTodo} 
          deleteTodo={deleteTodo} />
      ))}
    </ul>

  );
}

export default TodoList