import Image from 'next/image'
import React from 'react'

export default function Skills() {
    return (
        <section id="skills" className="skills d-flex align-items-center justify-content-center">
            <div className="skills-section container d-flex flex-column align-items-center justify-content-center mt-3">
                <h1 className="section-heading">Skills</h1>

                <ul className="skills-list d-flex flex-wrap col-lg-9">
                    <li className="skill-tag">
                        <Image src="react.png" alt="React icon" className="skill-icon img-fluid" />
                            ReactJS
                    </li>

                    <li className="skill-tag">
                        <Image src="node-js.png" alt="NodeJS icon" className="skill-icon img-fluid" />
                            NodeJS
                    </li>

                    <li className="skill-tag">
                        <Image src="next-js.svg" alt="NextJS icon" className="skill-icon img-fluid" />
                            NextJS
                    </li>

                    <li className="skill-tag">
                        <Image src="js.png" alt="Javascript icon" className="skill-icon img-fluid" />
                            Javascript
                    </li>

                    <li className="skill-tag">
                        <Image src="python.png" alt="Python icon" className="skill-icon img-fluid" />
                            Python
                    </li>

                    <li className="skill-tag">
                        <Image src="django.png" alt="Django icon" className="skill-icon img-fluid" />
                            Django
                    </li>

                    <li className="skill-tag">
                        <Image src="postgre.png" alt="Postgres icon" className="skill-icon img-fluid" />
                            Postgres
                    </li>

                    <li className="skill-tag">
                        <Image src="mongo.png" alt="MongoDB icon" className="skill-icon img-fluid" />
                            MongoDB
                    </li>

                    <li className="skill-tag">
                        <Image src="docker.png" alt="Docker icon" className="skill-icon img-fluid" />
                            Docker
                    </li>

                    <li className="skill-tag">
                        <Image src="aws.png" alt="AWS icon" className="skill-icon img-fluid" />
                            AWS
                    </li>

                    <li className="skill-tag">
                        <Image src="discord.png" alt="Discord icon" className="skill-icon img-fluid" />
                            Discord Bots
                    </li>

                    <li className="skill-tag">
                        <Image src="gnu-bash.png" alt="Bash icon" className="skill-icon img-fluid" />
                            Bash
                    </li>

                    <li className="skill-tag">
                        <Image src="apache.png" alt="Apache icon" className="skill-icon img-fluid" />
                            Apache
                    </li>

                    <li className="skill-tag">
                        <Image src="nginx.png" alt="Nginx icon" className="skill-icon img-fluid" />
                            Nginx
                    </li>

                </ul>
            </div>
        </section>
    )
}