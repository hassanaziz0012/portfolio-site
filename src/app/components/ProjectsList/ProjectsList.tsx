import React from 'react'
import { getAllProjects } from '../../../../prisma/db/project'
import './ProjectsList.css'

export default async function ProjectsList() {
    const projects = await getAllProjects();

    return (
        <div className='projects-list container'>
            {projects.map((project, i) => (
                <div className='project-list-item d-flex align-items-start row' key={i}>
                    <img src={project.main_photo} className='project-img col-lg-3' />
                    <div className='col-lg-6'>
                        <h4>{project.title}</h4>
                        <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
                        <div className="project-tags d-flex justify-content-between">
                            {project.tags.map((tag, i) => (
                                <span className='project-tag' key={i}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}
