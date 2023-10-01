import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function ProjectCards({ projects }) {
    return (
        <div className="d-flex align-items-start justify-content-center">
            <div className="row offset-lg-1">
                {projects.map((project, i) => (
                    <ProjectCard project={project} key={i} extraClasses={"col-lg-5"} />
                ))}
            </div>
        </div>
    )
}
