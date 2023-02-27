import React from 'react'

const ListHistory = ({ handleUndo, handleRedo, currentHistoryIndex, todoListHistory, handleHistoryClick }) => {
    return (
        <div className='listHistory-container'>
            <div className="undo-redo-buttons">
                <button
                    className='button'
                    onClick={handleUndo}
                    disabled={currentHistoryIndex === 0}>
                    Undo
                </button>
                <button
                    className='button'
                    onClick={handleRedo}
                    disabled={currentHistoryIndex === todoListHistory.length - 1}>
                    Redo
                </button>
            </div>
            <div className="history-container">
                <h2>History</h2>
                <ul>
                    {todoListHistory.map((todoList, index) => (
                        <li key={index}>
                            <div>
                                {index === currentHistoryIndex ? (
                                    <strong>Current: </strong>
                                ) : (
                                    <button
                                        className='button'
                                        onClick={() => handleHistoryClick(index)}
                                    >Go to
                                    </button>
                                )}
                            </div>
                            <div className='list-history'>
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