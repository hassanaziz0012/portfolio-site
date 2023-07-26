import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <div className="contact-section container d-flex flex-column align-items-center justify-content-center pt-3">
                <h1 className="section-heading">Contact</h1>
                <div>
                    <p className="text-center">
                        Wanna talk to me about a project?
                    </p>

                    <div className="text-center">
                        <SocialIcons />
                    </div>

                    <p className="text-center">
                        The best way to get in touch is Discord: <a className="link yellow-link"
                            href="https://discord.gg/vf3Sa83A7t">Hassan#3557</a>
                        - I&apos;m most active there.
                        If that&apos;s not your thing, you can email me at <a className="link yellow-link" 
                            href="mailto:hassanaziz0012@gmail.com">hassanaziz0012@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
