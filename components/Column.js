import React from 'react'
import Task from './Task';

const Column = ({column, tasks}) => {
    const {title} = column || {};
  return (
    <div className='m-2 border-2 border-gray-500 rounded-md p-2'>
        <h3 className='text-2xl'>{title}</h3>
        <div>
           {tasks.map(task => <Task key={task.id} task={task}/>)}
        </div>
    </div>
  )
}

export default Column;