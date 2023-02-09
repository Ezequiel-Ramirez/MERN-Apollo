import React from 'react'
import ProjectForm from '../components/ProjectForm'
import ProjectList from '../components/ProjectList'
import '../styles/Projects.css'

const Projects = () => {
    return (
        <div className='containerProjects'>
            <h1 className='titleProjects'>Project Manager</h1>
            <div className='containerForm'>
                <ProjectForm />
                <ProjectList />
            </div>
        </div>
    )
}

export default Projects