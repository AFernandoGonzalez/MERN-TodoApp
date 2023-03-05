import React from 'react'

const UndoRedo = ({ handleUndo, handleRedo, currentHistoryIndex, todoListHistory }) => {

    return (
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
    )
}

export default UndoRedo