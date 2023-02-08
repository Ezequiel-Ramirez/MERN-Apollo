import React from 'react'
import { useMutation, gql } from '@apollo/client'
import { CREATE_TASK } from '../../graphql/tasks'
import { useParams } from 'react-router-dom'

const TaskForm = () => {
    const { id } = useParams()

    const [createTask] = useMutation(CREATE_TASK, {
        refetchQueries: ['getProject'],
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        await createTask({
            variables: {
                title,
                projectId: id,
            },
        })
        e.target.reset()
        e.target.title.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Task Name" />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm