import React from 'react'
import TaskToDo from '../components/taskToDo/TaskToDo'
import "./RightMainPage.css"


export default function RightMainPage() {
  return (
    <div className='right-main-page-container'>
        <div className='right-main-page-title'>Tasks to do</div>
        <TaskToDo />
        <TaskToDo />
        <TaskToDo />
    </div>
  )
}
