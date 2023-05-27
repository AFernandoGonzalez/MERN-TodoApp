import { React, useState } from 'react'
import './ListHistory.scss'

const ListHistory = ({todoListHistory, setTodoListHistory, setCurrentHistoryIndex }) => {
    const [isHistoryListOpen, setIsHistoryListOpen] = useState(false);

    const handleClearListHistory = () => {
        setTodoListHistory([]);
        setCurrentHistoryIndex(0);
    }

    return (
        <>
            <div onClick={() => setIsHistoryListOpen(true)} className='btn btn-list-open list-open-close-btn'>Open</div>
            <div className='list-section'>
                {isHistoryListOpen && (
                    <div className='listHistory-container'>
                        <div className="btn-close" onClick={() => setIsHistoryListOpen(false)} ><i className="fa-regular fa-circle-xmark"></i></div>
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