import React from 'react'
import Nav from '../Nav/Nav'

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
                        <button className="btn btn-secondary" style={{ borderColor: "#3B4252" }}>Download Resume</button>
                    </div>

                    <div className="social-links mt-3">
                        <a href="#" className="social-link github">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#" className="social-link email">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                        <a href="#" className="social-link discord">
                            <i className="fa-brands fa-discord"></i>
                        </a>
                        <a href="#" className="social-link twitter">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>

                <Nav />
            </div>
        </section>
    )
}
