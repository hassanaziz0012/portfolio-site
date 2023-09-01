import React from 'react'
import { getAllProjects } from '../../../../prisma/db/project'
import './ProjectsList.css'

export default async function ProjectsList() {
    const projects = await getAllProjects();

    return (
        <div className='projects-list container'>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Tags</th>
                        <th>GitHub URL</th>
                    </tr>
                </thead>

                <tbody className=''>
                    {projects.map((project, i) => (
                        <tr className='project-list-item' key={i}>
                            <td>{project.title}</td>
                            <td>{project.type}</td>
                            <td>
                                <ul className="skills-list d-flex flex-wrap">
                                    {project.tags.map((tag, i) => (
                                        <li className="skill-tag" key={i}>{tag}</li>
                                    ))}
                                </ul>
                            </td>
                            <td>
                                <a href={project.github_url} className='bg-default'>
                                    <i className="fa-brands fa-github fa-xl"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}
