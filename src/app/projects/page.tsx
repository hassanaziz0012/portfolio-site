import React from 'react'
import { Metadata } from 'next'
import ProjectsList from '../components/ProjectsList/ProjectsList'

export const metadata: Metadata = {
    title: "Projects - Hassan Aziz",
    description: "Projects I've worked on and built are all listed here."
}

export default function page() {
    return (
        <div>
            <div className="container mt-3">
                <h4>
                    <a href="/" className='link yellow-link'>Back</a>
                </h4>
            </div>
            <ProjectsList />
        </div>
    )
}
