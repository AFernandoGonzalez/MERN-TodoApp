import { React, useState, useEffect } from 'react';
import TodoList from './components/todoList/TodoList';
import AddTodo from './components/addTodo/AddTodo';

const App = () => {
  const [todos, setTodos] = useState();
  // Get Todos
  useEffect(() => {
    // code to fetch todos from API
    const fetchedTodos = [
      // { id: 1, title: "Learn React", completed: false },
      // { id: 2, title: "Build a Todo App", completed: true },
      // { id: 3, title: "Deploy App to Netlify", completed: false },
    ];
    setTodos(fetchedTodos);
  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo addTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>

  );
}

export default App