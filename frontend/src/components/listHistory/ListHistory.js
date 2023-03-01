import React from 'react'
import './ListHistory.scss'

const ListHistory = ({ handleUndo, handleRedo, currentHistoryIndex, todoListHistory, handleHistoryClick }) => {
    const currentTime = new Date();
    return (
        <div className='listHistory-container'>
            <div className="undo-redo-buttons">
                <button
                    className='btn btn-warning m-sm'
                    onClick={handleUndo}
                    disabled={currentHistoryIndex === 0}>
                    <i className="fa-solid fa-rotate-left"></i>
                </button>
                <button
                    className='btn btn-warning m-sm'
                    onClick={handleRedo}
                    disabled={currentHistoryIndex === todoListHistory.length - 1}>
                    <i className="fa-solid fa-rotate-right"></i>
                </button>
            </div>

            <div className="history-container">
                <h2>History List</h2>
                <ul>
                    {todoListHistory.map((todoList, index) => (
                        <li className='row' key={index}>
                            <div className='right'>
                                <p>{index}</p>
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