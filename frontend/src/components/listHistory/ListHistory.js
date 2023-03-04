import { React, useState } from 'react'
import './ListHistory.scss'

const ListHistory = ({ handleUndo, handleRedo, currentHistoryIndex, todoListHistory, setTodoListHistory, setCurrentHistoryIndex }) => {
    const [isHistoryListOpen, setIsHistoryListOpen] = useState(false);

    const handleClearListHistory = () => {
        setTodoListHistory([]);
        setCurrentHistoryIndex(0);
    }

    return (
        <>
            {/* <div className='list-open-close-btn'>{isHistoryListOpen ? <button className='btn-close' onClick={() => setIsHistoryListOpen(false)}>Close</button> : <button className='btn-open' onClick={() => setIsHistoryListOpen(true)}>History List</button>}</div> */}
            <div onClick={() => setIsHistoryListOpen(true)} className='list-open-close-btn'>Open</div>
            <div className='list-section'>
                {isHistoryListOpen && (

                    <div className='listHistory-container'>
                        <div className="btn-close" onClick={() => setIsHistoryListOpen(false)} ><i class="fa-regular fa-circle-xmark"></i></div>

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
                            <div className='clear-history-btn'>
                                <button onClick={handleClearListHistory} className='btn '>Clear All</button>
                            </div>
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
                )}
            </div>
        </>
    )
}

export default ListHistory