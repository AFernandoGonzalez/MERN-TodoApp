import { React, useState } from 'react'
import '../../styles/components/_buttons.scss'

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) {
      setAlert(true)
    } else {
      const id = Math.floor(Math.random() * 10000) + 1;
      addTodo({ id, title: newTodo, completed: false });
      setNewTodo("");
      setAlert(false)
    }
  };

  return (
    <div className='addTodo-container'>
      <form className='form add-todo-form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <span className='form-alert'>{alert ? "Enter a task" : ""}</span>
        <button className='btn btn-primary' type="submit"><i className="fa-thin fa-plus"></i></button>
      </form>
    </div>
  );
}

export default AddTodo