'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'

export default function Project({ project, index }: {project: any, index: number}) {
    const [width, setWidth] = useState<number>(1920);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleWidthChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidthChange);
        return () => {
            window.removeEventListener('resize', handleWidthChange)
        }
    }, [handleWidthChange])

    useEffect(() => setWidth(window.innerWidth), [])

    return (
        <div className="project row">
            { index % 2 == 1 || width < 992 ? (
                <div className="col-lg-6 project-image">
                    <img src={project.main_photo} alt="pisgcanfly" className="img-fluid" />
                </div>
                ) : null
            }

            <div className={`col-lg-6 project-info ${width < 992 ? "mt-3" : ""}`}>
                <h4>
                    {project.detail_url ? (
                        <a href={project.detail_url} className="link yellow-link">
                            {project.title}
                        </a>
                        )
                        :
                        <>{project.title}</>
                    }
                </h4>
                <p className="text-start" style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: project.description }} />
                <hr />
                <div className="col-md-12 row">
                    <div className="project-tags d-flex align-items-center justify-content-around col-md-12">
                        {project.tags.map((tag: string, i: number) => (
                            <span key={i} className='project-tag'>{tag}</span>
                        ))}
                        <div className="project-links">
                            <a href={project.github_url} className="link github-link">
                                <i className="fa-brands fa-github fa-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            { index % 2 == 0 && !(width < 992) ? (
                <div className="col-lg-6 project-image">
                    <img src={project.main_photo} alt="pisgcanfly" className="img-fluid" />
                </div>
            ) : null
            }
        </div>
    )
}
