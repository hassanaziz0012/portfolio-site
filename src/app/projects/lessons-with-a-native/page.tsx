import React from 'react'
import { Metadata } from 'next'
import { getProject } from '../../../../prisma/db/project'
import Page from '@/app/components/common/Page/Page'

export const metadata: Metadata = {
    title: "Lessons With a Native - Hassan Aziz",
    description: "Language learning web app built with Django and the beautiful Nord theme."
}

export default async function page() {
    const project = await getProject(2)
    return (
        <Page>
            <div className="container mt-3">
                <h4>
                    <a href="/" className='link primary-link'>Back</a>
                    <hr />
                </h4>

                <div className="main-image">
                    <img src={`/${project?.main_photo}`} alt="" className='img-fluid' />
                </div>

                <h1>{project?.title}</h1>
                <div className="row mt-5">
                    <div className="col-lg-3 attributes">
                        <div className="attribute">
                            <h3>Type</h3>
                            <p>{project?.type}</p>
                        </div>

                        <div className="attribute">
                            <h3>Technologies</h3>
                            <p>
                                {project?.tags.map((tag, i) => (
                                    <span key={i}>{tag} <br /> </span>
                                ))}
                            </p>
                        </div>

                        {project?.live_url ? (
                            <div className="attribute">
                                <h3>Live Demo</h3>
                                <p><a href={project?.live_url || ""} className="link primary-link">Click here</a></p>
                            </div>
                            )
                            :
                            ""
                        }

                        <div className="attribute">
                            <h3>Github</h3>
                            <p><a href={project?.github_url} className="link primary-link">Click here</a></p>
                        </div>
                    </div>

                    <div className="col-lg-8 content">
                        <h3>Introduction</h3>
                        <p>
                            Lessons With A Native is a Django-based language-learning and student management web app
                            I built from scratch. It uses pure Django, along with the beautiful Nord theme for the design.
                            This was actually my first real project with Django, and I was super nervous about the whole
                            thing, but I think it turned out great.
                        </p>

                        <h3>Core Features</h3>
                        <p>
                            The website is mainly for managing your students, tests/exams, and tracking student progress.
                            I built this for my client&apos;s internal use. A list of the main features:
                        </p>
                        <ul>
                            <li>Creating and managing students</li>
                            <li>Creating and managing tests</li>
                            <li>Tracking student progress in each individual test</li>
                            <li>Backup and Restore all site data</li>
                            <li>Email notifications for students</li>
                        </ul>


                        <h3>Challenges I encountered</h3>
                        <h5>Database Migrations</h5>
                        <p>
                            When I was building this project, I was pretty inexperienced with web development. One of
                            the major problems I frequently encountered was managing database migrations. A lot of times
                            I would create an incompatible schema and cause some sort of migration error. At the time, the
                            only solution I could think of was to reset the database. That is actually where the need to
                            build a backup feature arose. Normally, I would&apos;ve used Django&apos;s built-in 
                            &ldquo;dumpdata&rdquo; and &ldquo;loaddata&rdquo; commands, but I didn&apos;t know about them 
                            at the time. Instead, I decided to build my own custom solution with Pandas, which was a 
                            difficult challenge of its own.
                        </p>

                        <br /><br />
                        <h5>Pandas and Data backups</h5>
                        <p>
                            I had never worked with Pandas before, but some googling, practice, and a couple StackOverflow posts
                            pointed me in the right direction, and I got it working. The main reason I wanted Pandas was that
                            their DataFrame objects are just really convenient to work with, and I found it easier to work with
                            files by using Pandas to read their data.
                        </p>

                        <br /><br />
                        <h5>What I learned</h5>
                        <p>
                            Later on, I also learned more about databases and how to manage migrations properly. I rarely get any
                            migration errors now, and if I ever do, I have enough skill with database systems to just hop on my
                            terminal, connect to the db, and manually make any necessary adjustments.
                        </p>

                        <div className="screenshots">
                            <h3>Screenshots</h3>

                            <img src="https://github.com/hassanaziz0012/lessons-with-a-native/blob/master/proj-imgs/5.png?raw=true" alt="" className='img-fluid' />
                            <p className='caption'>Taking a test</p>
                            <hr />
                            <img src="https://github.com/hassanaziz0012/lessons-with-a-native/blob/master/proj-imgs/6.png?raw=true" alt="" className='img-fluid' />
                            <p className='caption'>Review questions shown after test</p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}
