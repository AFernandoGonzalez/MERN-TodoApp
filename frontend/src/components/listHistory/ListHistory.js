import React from 'react'
import './ListHistory.scss'

const ListHistory = ({ handleUndo, handleRedo, currentHistoryIndex, todoListHistory, handleHistoryClick }) => {
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
                <h2>History</h2>
                <ul>
                    {todoListHistory.map((todoList, index) => (
                        <li className='row' key={index}>
                            <div className='left'>
                                {index === currentHistoryIndex ? (
                                    <strong>Latest Task Added: </strong>
                                ) : (
                                    <button
                                        className='btn text-color'
                                        onClick={() => handleHistoryClick(index)}
                                    >
                                    <i className="fa-solid fa-hand-point-left"></i>
                                    </button>
                                )}
                            </div>
                            <div className='right'>
                                {todoList.map((todo) => (
                                    <p key={todo.id}>{todo.title}</p>
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