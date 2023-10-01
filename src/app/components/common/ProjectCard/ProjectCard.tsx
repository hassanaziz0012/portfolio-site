"use client"
import React, { useRef, useState } from 'react'
import './ProjectCard.css'
import Card from '../Card/Card'
import Link from 'next/link'

export default function ProjectCard({ project, extraClasses }) {
    const renderProject = () => (
        <>
            <div className="poster">
                <img src={project.main_photo} alt="" />
            </div>
            <div className="details">
                <h3 className='title'>{project.title}</h3>
                <p className="description">{project.short_description}</p>

                <div className="tags">
                    {project.tags.map((tag, i) => (
                        <span className="project-tag" key={i}>{tag}</span>
                    ))}
                </div>
            </div>
        </>
    )
    return (
        <div className={`project-card p-0 ${extraClasses}`}>
            {
            project.detail_url === null ? 
            renderProject() 
            : 
            <Link href={project.detail_url}>
                {renderProject()}
            </Link>
            }
        </div>
    )
}
