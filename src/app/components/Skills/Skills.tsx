/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <section id="skills" className="skills d-flex align-items-center justify-content-center">
            <div className="skills-section container d-flex flex-column align-items-center justify-content-center mt-3">
                <h1 className="section-heading">Skills</h1>
                <p>
                    I&apos;ve worked with a ton of different tools over the years. Still, there are always fun new things to learn. 
                    <span role='img' aria-label='smiley'> 😊</span>
                </p>

                <ul className="skills-list d-flex flex-wrap col-lg-9">
                    <li className="skill-tag">
                        <img src="/skills/react.png" alt="React icon" className="skill-icon img-fluid" />
                            ReactJS
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/node-js.png" alt="NodeJS icon" className="skill-icon img-fluid" />
                            NodeJS
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/next-js.svg" alt="NextJS icon" className="skill-icon img-fluid" />
                            NextJS
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/js.png" alt="Javascript icon" className="skill-icon img-fluid" />
                            Javascript
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/python.png" alt="Python icon" className="skill-icon img-fluid" />
                            Python
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/django.png" alt="Django icon" className="skill-icon img-fluid" />
                            Django
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/postgre.png" alt="Postgres icon" className="skill-icon img-fluid" />
                            Postgres
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/mongo.png" alt="MongoDB icon" className="skill-icon img-fluid" />
                            MongoDB
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/docker.png" alt="Docker icon" className="skill-icon img-fluid" />
                            Docker
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/aws.png" alt="AWS icon" className="skill-icon img-fluid" />
                            AWS
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/discord.png" alt="Discord icon" className="skill-icon img-fluid" />
                            Discord Bots
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/gnu-bash.png" alt="Bash icon" className="skill-icon img-fluid" />
                            Bash
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/apache.png" alt="Apache icon" className="skill-icon img-fluid" />
                            Apache
                    </li>

                    <li className="skill-tag">
                        <img src="/skills/nginx.png" alt="Nginx icon" className="skill-icon img-fluid" />
                            Nginx
                    </li>

                </ul>
            </div>
        </section>
    )
}
