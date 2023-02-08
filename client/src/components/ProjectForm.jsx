import React from 'react'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { GET_PROJECTS, CREATE_PROJECT } from '../graphql/projects'

const ProjectForm = () => {
    const [project, setProject] = useState({
        name: '',
        description: ''
    })

    const [createProject, { loading, error, data }] = useMutation(CREATE_PROJECT, {
        refetchQueries: [{ query: GET_PROJECTS }, 'GET_PROJECTS'] // this is the same as the refetchQueries in handleSubmit
        })

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createProject({
            variables: {
                name: project.name,
                description: project.description
            },
            refetchQueries: [{ query: GET_PROJECTS }]
        })
        setProject({
            name: '',
            description: ''
        })

    }


    return (
        <form>
            {error && <p>{error.message}</p>}
            <input
                type="text"
                name="name"
                placeholder="Project Name"
                onChange={handleChange}
                value={project.name} />
            <textarea
                name="description"
                rows={3}
                placeholder="Write a Description"
                onChange={handleChange}
                value={project.description}>
            </textarea>
            <button
                type="submit"
                onClick={handleSubmit}
                disabled={!project.name || !project.description || loading}
            >Save</button>
        </form>
    )
}

export default ProjectForm