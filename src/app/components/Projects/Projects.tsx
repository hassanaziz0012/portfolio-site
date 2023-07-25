import React from 'react'
import { getAllProjects } from '../../../../prisma/db/project'
import Project from '../Project/Project';

export default async function Projects() {
    const projects = await getAllProjects(); 

    return (
        <section id="projects" className="projects d-flex align-items-center justify-content-center">
            <div className="projects-section container text-center mt-3">
                <h1>Projects</h1>
                {projects.map((project, i) => (
                    <Project key={i} project={project} index={i} />
                ))}
                <hr />

                <div className="projects-list">

                    {/* <div className="see-more col-lg-12 mb-4">
                        <a href="{% url 'projects' %}">
                            <button className="btn btn-primary">See More</button>
                        </a>
                    </div> */}

                </div>
            </div>
        </section>
    )
}
