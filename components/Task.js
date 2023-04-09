import React from 'react'

const Task = ({task}) => {
  return (
    <p className='border-2 border-gray-400 p-2 mb-2 rounded-md'>{task.content}</p>
  )
}

export default Task