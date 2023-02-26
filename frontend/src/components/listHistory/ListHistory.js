import React from 'react'

const ListHistory = ({ handleUndo, handleRedo, currentHistoryIndex, todoListHistory, handleHistoryClick}) => {
    
    
    return (
        <div>
            <div className="undo-redo-buttons">
                <button
                    onClick={handleUndo}
                    disabled={currentHistoryIndex === 0}>
                    Undo
                </button>
                <button
                    onClick={handleRedo}
                    disabled={currentHistoryIndex === todoListHistory.length - 1}>
                    Redo
                </button>
            </div>
            <div className="history">
                <h2>History</h2>
                <ul>
                    {todoListHistory.map((todoList, index) => (
                        <li key={index}>
                            {index === currentHistoryIndex ? (
                                <strong>Current: </strong>
                            ) : (
                                <button onClick={() => handleHistoryClick(index)}>Go to</button>
                            )}
                            {todoList.map((todo) => (
                                <p key={todo.id}>{todo.title}</p>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListHistory