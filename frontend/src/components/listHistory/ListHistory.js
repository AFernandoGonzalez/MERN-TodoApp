import React from 'react'
import './ListHistory.scss'

const ListHistory = ({ handleUndo, handleRedo, currentHistoryIndex, todoListHistory, setTodoListHistory, setCurrentHistoryIndex }) => {

    const handleClearListHistory = () =>{
        setTodoListHistory([]);
        setCurrentHistoryIndex(-1);
    }
    
    return (
        <div className='listHistory-container'>
            <div className="undo-redo-buttons">
                <button
                    className='btn '
                    onClick={handleUndo}
                    disabled={currentHistoryIndex === 0}>
                    <i className="fa-solid fa-rotate-left"></i>
                </button>
                <button
                    className='btn'
                    onClick={handleRedo}
                    disabled={currentHistoryIndex === todoListHistory.length - 1}>
                    <i className="fa-solid fa-rotate-right"></i>
                </button>
            </div>

            <div className="history-container">
                <h2>History List</h2>
                <button onClick={handleClearListHistory} className='btn '>Clear All</button>
                <ul>
                {todoListHistory.filter(todoList => todoList.length > 0).map((todoList, index) => (
                        <li className='row' key={index}>
                        <p className='index-todo'>{index + 1}</p>
                            <div className='right'>
                                {/* <p>{index + 1}</p> */}
                                {todoList.map((todo) => (
                                    <p key={todo.id}> 
                                        
                                        {todo.completed ? <i className="fa-regular fa-circle-check green"></i> : <i className="fa-regular fa-circle-xmark red"></i>}
                                        {todo.title}
                                    </p>
                                ))}
                            </div>
                        </li>

                    ))}

                </ul>

            </div>
        </div>
    )
}

export default ListHistory