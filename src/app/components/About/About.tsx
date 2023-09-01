import React from 'react'
import Nav from '../HomeNav/HomeNav'
import SocialIcons from '../SocialIcons/SocialIcons'

export default function About() {
    return (
        <section className="hero d-flex align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-center container">
                <div className="hero-section col-md-6">
                    <h1>I&apos;m Hassan</h1>
                    <h4>I build software.</h4>
                    <p>
                        I&apos;m a self-taught developer and have been writing code for 4 years now. During that time, I&apos;ve built
                        everything from websites, automation scripts, and discord bots to APIs, desktop and mobile apps,
                        and more. I really enjoy programming and building cool stuff from just a text file.
                    </p>

                    <div className="hero-buttons mt-4">
                        <button className="btn btn-secondary" style={{ borderColor: "#3B4252" }}>
                            <a className='link' href="resume.pdf" style={{ background: "transparent", color: "var(--light-background-1)" }}>Download Resume</a>
                        </button>
                    </div>

                    <div className="mt-3">
                        <SocialIcons />
                    </div>
                </div>

                <Nav />
            </div>
        </section>
    )
}
