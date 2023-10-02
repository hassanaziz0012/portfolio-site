import React from 'react'
import { Metadata } from 'next'
import ProjectsList from '../components/ProjectsList/ProjectsList'
import Page from '../components/common/Page/Page'
import { getAllProjects, getFeaturedProjects } from '../../../prisma/db/project'
import ProjectCard from '../components/common/ProjectCard/ProjectCard'
import ProjectCards from '../components/common/ProjectCards/ProjectCards'

export const metadata: Metadata = {
    title: "Projects - Hassan Aziz",
    description: "Projects I've worked on and built are all listed here."
}

export default async function page() {
    const projects = await getAllProjects();
    
    return (
        <Page>
            <div className='container'>
                <h1>My Projects</h1>
                <ProjectCards projects={projects} />

                {/* <ProjectsList /> */}
            </div>
        </Page>
    )
}
