import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-section container d-flex flex-column align-items-center justify-content-center pt-3">
                <h1 className="section-heading">Contact</h1>
                <div>
                    <p className="text-center">
                        Wanna talk to me about a project?
                    </p>

                    <div className="social-links text-center">
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
                    <p className="text-center">
                        The best way to get in touch is Discord: <a className="link yellow-link"
                            href="https://discord.com/app">Hassan#3557</a>
                        - I&apos;m most active there.
                        If that&apos;s not your thing, you can email me at <a className="link yellow-link" 
                            href="mailto:hassanaziz0012@gmail.com">hassanaziz0012@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
