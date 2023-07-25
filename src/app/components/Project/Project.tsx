import Image from 'next/image'
import React from 'react'

export default function Project({ project, index }: {project: any, index: number}) {

    return (
        <div className="project row">

            { index % 2 == 1 ? (
                <div className="col-lg-6 project-image">
                    <Image src={project.main_photo} alt="pisgcanfly" className="img-fluid" />
                </div>
                ) : null
            }

            <div className="col-lg-6 project-info">
                <h4>{project.title}</h4>
                <p className="text-start" style={{ whiteSpace: 'pre-line' }}>
                    {project.description}
                </p>
                <hr />
                <div className="col-md-12 row">
                    <div className="project-tags d-flex align-items-center justify-content-around col-md-9">
                        {project.tags.map((tag: string, i: number) => (
                            <span key={i} className='project-tag'>{tag}</span>
                        ))}
                    </div>
                    <div className="project-links col-md-3">
                        <a href={project.github_url} className="link github-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            { index % 2 == 0 ? (
                <div className="col-lg-6 project-image">
                    <Image src={project.main_photo} alt="pisgcanfly" className="img-fluid" />
                </div>
            ) : null
            }
        </div>
    )
}
