import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_TASK } from '../../graphql/tasks'

const TaskCard = ({ task }) => {

    const [deleteTask] = useMutation(DELETE_TASK, {
        refetchQueries: ['getProject'],
    })

    const handleDelete = async () => {
        await deleteTask({
            variables: {
                id: task._id
            }
        })
    }

    return (
        <div>
            <h2>{task.title}</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TaskCard