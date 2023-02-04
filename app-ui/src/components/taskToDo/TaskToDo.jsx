import React from 'react'
import "./TaskToDo.css"


export default function TaskToDo() {
  return (
    <div className='task-to-do-container'>
        <div className='task-to-do-contents'>
            <h1 className='task-to-do-title'>Title</h1>
            <div className='task-to-do-description'>Description</div>
            <div className='task-to-do-buttons'>
                <div>Cacnel</div>
                <div>Done</div>
            </div>
        </div>
    </div>
  )
}
