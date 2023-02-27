import { React } from 'react';
import TodoItem from '../todoItem/TodoItem';


const TodoList = ({ todos, handleUpdateTodo, deleteTodo }) => {



  return (
    <div className='todoList-container'>
      {todos?.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          handleUpdateTodo={handleUpdateTodo} 
          deleteTodo={deleteTodo} />
      ))}
    </div>

  );
}

export default TodoList