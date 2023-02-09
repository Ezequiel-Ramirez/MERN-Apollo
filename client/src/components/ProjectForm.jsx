import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { GET_PROJECTS, CREATE_PROJECT } from '../graphql/projects'
import '../styles/ProjectForm.css'

const ProjectForm = () => {
    const [project, setProject] = useState({
        name: '',
        description: ''
    })

    const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
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
        <form className='formProject'>
            {error && <p>{error.message}</p>}
            <input
                type="text"
                name="name"
                placeholder="Project Name"
                onChange={handleChange}
                value={project.name} 
                    className='inputProject'
                />
            <textarea
            className='textareaProject'
                name="description"
                rows={3}
                placeholder="Write a Description"
                onChange={handleChange}
                value={project.description}>
            </textarea>
            <div className='containerButton'>
            <button
            className='buttonProject'
                type="submit"
                onClick={handleSubmit}
                disabled={!project.name || !project.description || loading}
            >Save</button>
            </div>
        </form>
    )
}

export default ProjectForm