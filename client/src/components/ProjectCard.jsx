import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ProjectCard.css'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/projects/${project._id}`)}
      className="projectCard"
    >
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard