import React from 'react'
import { Metadata } from 'next'
import ProjectsList from '../components/ProjectsList/ProjectsList'

export const metadata: Metadata = {
    title: "Projects - Hassan Aziz",
    description: "Projects I've worked on and built are all listed here."
}

export default function page() {
    return (
        <div className='container'>
            <h1>My Projects</h1>
            <ProjectsList />
        </div>
    )
}
