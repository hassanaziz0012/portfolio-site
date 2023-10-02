"use client"
import React, { useRef, useState } from 'react'
import './ProjectCard.css'
import Card from '../Card/Card'
import Link from 'next/link'
import FAIcon from '../FAIcon/FAIcon'

export default function ProjectCard({ project, extraClasses }) {
    const renderProject = () => (
        <>
            <div className="poster">
                <img src={project.main_photo} alt="" />
            </div>
            <div className="details">
                <h3 className='title'>{project.title}</h3>
                <p className="description">{project.short_description}</p>

                <div className="tags d-flex align-items-center justify-content-start flex-wrap">
                    {project.tags.map((tag, i) => (
                        <span className="project-tag" key={i}>{tag}</span>
                    ))}
                    {
                        project.github_url ?
                        <a className='github-icon' href={project.github_url}>
                            <FAIcon icon='fa-brands fa-github' />
                        </a>
                        : ""
                    }
                    {
                        project.live_url ?
                        <a href={project.live_url} className="live-url link">See Live</a>
                        : ""
                    }
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
