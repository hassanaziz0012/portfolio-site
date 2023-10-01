import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'
import Card from '../common/Card/Card'
import socialLinks from '@/utils/socialLinks'
import './Contact.css'

export default function Contact() {
    const emailUrl = socialLinks.filter((link) => link.name === "Email")[0].url
    const discordUrl = socialLinks.filter((link) => link.name === "Discord")[0].url

    return (
        <section className="contact d-flex flex-column align-items-center justify-content-center">
            <div className="contact-section pb-5 pt-5">
                <h1 className="section-heading text-center">Contact</h1>
                <div className="row container pt-3 d-flex">
                    <div className="offset-lg-4 col-lg-4">
                        <Card>
                            <h4>Get in touch</h4>

                            <p className='mb-0'>Send an email</p>
                            <a href={emailUrl} className='link'>{emailUrl.replace("mailto:", "")}</a>

                            <p className='mb-0 mt-3'>Chat on Discord</p>
                            <a href={discordUrl} className='link'>Join my server</a>

                            <p className='mb-0 mt-3'>My social medias</p>
                            <SocialIcons style="default" />
                        </Card>
                    </div>
                    <div className="col-lg-4">
                        <p>
                            The best way to get in touch is Discord: <a className="link primary-link"
                                href="https://discord.gg/vf3Sa83A7t">Hassan#3557 (itshassanaziz)</a>
                            - I&apos;m most active there.
                            If that&apos;s not your thing, you can email me at <a className="link primary-link"
                                href="mailto:hassanaziz0012@gmail.com">hassanaziz0012@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
