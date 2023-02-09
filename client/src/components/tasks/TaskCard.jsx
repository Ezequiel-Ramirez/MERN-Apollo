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
        <div style={{borderRadius:' 15px', border: '1px solid white', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', margin: '5px', backgroundColor: 'white', color: 'black'}}>
            <h2>{task.title}</h2>
            <button onClick={handleDelete} style={{borderRadius: '5px'}}>Delete</button>
        </div>
    )
}

export default TaskCard