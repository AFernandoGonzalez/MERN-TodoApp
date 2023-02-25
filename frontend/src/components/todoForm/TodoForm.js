import {React, useState, useEffect} from 'react';
import AddTodo from '../addTodo/AddTodo';
import TodoList from '../todoList/TodoList';

const TodoForm = ({props}) => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = newTodo => {
    setTodos([...todos, { ...newTodo, id: todos.length + 1 }]);
  };

  const handleUpdateTodo = updatedTodo => {
    const updatedTodos = todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = todoId => {
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default TodoForm