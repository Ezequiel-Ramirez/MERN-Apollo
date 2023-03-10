import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({ tasks }) => {
    return (
        <div style={{borderRadius:'15px', width:'100%'}}>
            {tasks.map(task => (
                <TaskCard key={task._id} task={task} />
            ))}
        </div>
    )
}

export default TaskList