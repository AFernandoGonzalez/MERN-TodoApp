import { React, useState, useEffect } from 'react';
import TodoList from './components/todoList/TodoList';
import AddTodo from './components/addTodo/AddTodo';
import Filter from './components/filterTodo/Filter';
import Search from './components/searchTodo/Search';
import ListHistory from './components/listHistory/ListHistory';
import Header from './components/header/Header'

import './App.scss'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTodo, setSearchTodo] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [todoListHistory, setTodoListHistory] = useState([todos]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  // Get Todos
  useEffect(() => {
    // code to fetch todos from API
    const fetchedTodos = [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Build a Todo App", completed: true },
      { id: 3, title: "Learn React", completed: false },
      { id: 4, title: "Build a Todo App", completed: true },
      { id: 5, title: "Learn React", completed: false },
      { id: 6, title: "Build a Todo App", completed: true },
      { id: 7, title: "Learn React", completed: false },
      { id: 8, title: "Build a Todo App", completed: true }
    ];
    setTodos(fetchedTodos);

  }, []);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setTodoListHistory([...todoListHistory, [...todos, newTodo]]);
    setCurrentHistoryIndex(currentHistoryIndex + 1);
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo);
    setTodos(updatedTodos);
    setTodoListHistory([...todoListHistory, updatedTodos]);
    setCurrentHistoryIndex(currentHistoryIndex + 1);
  };

  const handleDeleteTodo = (id) => {
    const deleteUpdatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(deleteUpdatedTodos);
    setTodoListHistory([...todoListHistory, deleteUpdatedTodos]);
    setCurrentHistoryIndex(currentHistoryIndex + 1);
  };

  const handleSearch = (searchTerm) => {
    setSearchTodo(searchTerm);
  };

  const handleFilter = (filterTerm) => {
    setFilterType(filterTerm);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterType === "all") {
      return true;
    } else if (filterType === "completed" && todo.completed) {
      return true;
    } else if (filterType === "incomplete" && !todo.completed) {
      return true;
    }
    return false;
  });

  const searchedTodos = filteredTodos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTodo.toLowerCase() || "")
  );

  const handleUndo = () => {
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex(currentHistoryIndex - 1);
      setTodos(todoListHistory[currentHistoryIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentHistoryIndex < todoListHistory.length - 1) {
      setCurrentHistoryIndex(currentHistoryIndex + 1);
      setTodos(todoListHistory[currentHistoryIndex + 1]);
    }
  };


  return (
    <div className="todo-app">
      <div className='header-section'>
        <Header />
        <ListHistory
          handleUndo={handleUndo}
          handleRedo={handleRedo}
          currentHistoryIndex={currentHistoryIndex}
          todoListHistory={todoListHistory}
          setTodoListHistory={setTodoListHistory}
          setCurrentHistoryIndex={setCurrentHistoryIndex}
        />
      </div>
      <div className='search-filter'>
        <Search handleSearch={handleSearch} />
        <Filter handleFilter={handleFilter} />
      </div>
      <AddTodo addTodo={handleAddTodo} />
      <TodoList
        todos={searchedTodos}
        handleUpdateTodo={handleUpdateTodo}
        deleteTodo={handleDeleteTodo}
      />

    </div>
  );
}

export default App