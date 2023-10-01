"use client"
import React, { useEffect, useState } from 'react'
import Nav from '../HomeNav/HomeNav'
import SocialIcons from '../SocialIcons/SocialIcons'
import HLoader from '../common/HLoader/HLoader'
import './About.css';
import NeonButton from '../common/NeonButton/NeonButton'


const aboutInfo = {
    headline: "I'm Hassan",
    subheadline: "I build software.",
    description: `I'm a self-taught developer and have been writing code for 4 years now. During that time, I've built
                    everything from websites, automation scripts, and discord bots to APIs, desktop and mobile apps,
                    and more. I really enjoy programming and building cool stuff from just a text file.`
}

export default function About() {
    return (
        <section className="hero about-section d-flex align-items-center justify-content-center">
            <div className="row d-flex align-items-center justify-content-center container">
                <div className="hero-section col-md-6">
                    <h1>{aboutInfo.headline}</h1>
                    <h4>{aboutInfo.subheadline}</h4>
                    <p>{aboutInfo.description}</p>

                    <div className="hero-buttons mt-4">
                        {/* <button className="btn btn-secondary" style={{ borderColor: "#3B4252" }}>
                            <a className='link' href="resume.pdf" style={{ background: "transparent", color: "var(--light-background-1)" }}>Download Resume</a>
                        </button> */}
                        <NeonButton text="Download Resume" url="resume.pdf" />
                    </div>

                    <div className="mt-3">
                        <SocialIcons style={"default"} />
                    </div>
                </div>

                <Nav />
            </div>
        </section>
    )
}
