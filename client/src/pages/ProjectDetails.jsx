import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../graphql/projects'
import TaskList from '../components/tasks/TaskList'
import TaskForm from '../components/tasks/TaskForm'
import { useMutation } from '@apollo/client'
import { DELETE_PROJECT } from '../graphql/projects'

const ProjectDetails = () => {

  const { id } = useParams()

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: ['getProjects'],
  })

  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { id },
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  const { project } = data

  const handleDelete = async () => {
    await deleteProject({
      variables: {
        id: project._id,
      },
    })

    window.location.href = '/projects'
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button onClick={handleDelete}>Delete</button>
      <TaskForm />
      <TaskList tasks={project.tasks} />
    </div>
  )
}

export default ProjectDetails