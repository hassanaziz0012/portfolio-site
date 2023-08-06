import React from 'react'
import { getFeaturedProjects } from '../../../../prisma/db/project'
import Project from '../Project/Project';
import Link from 'next/link';

export default async function ProjectsGrid() {
    const projects = await getFeaturedProjects(); 

    return (
        <section id="projects" className="projects d-flex align-items-center justify-content-center">
            <div className="projects-section container text-center mt-3">
                <h1>Projects</h1>
                {projects.map((project, i) => (
                    <Project key={i} project={project} index={i} />
                ))}
                <hr />

                <div className="see-more col-lg-12 mb-4">
                    <Link href="projects">
                        <button className="btn btn-primary">See More</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
