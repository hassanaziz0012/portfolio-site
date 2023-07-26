import React from 'react'

export default function SocialIcons() {
    const github_url = "https://github.com/hassanaziz0012"
    const email_url = "mailto:hassanaziz0012@gmail.com"
    const discord_url = "https://discord.gg/vf3Sa83A7t"
    const twitter_url = "https://twitter.com/itshassanaziz"

    return (
        <div className="social-links">
            <a href={github_url} target='_blank' className="social-link github">
                <i className="fa-brands fa-github"></i>
            </a>
            <a href={email_url} className="social-link email">
                <i className="fa-solid fa-envelope"></i>
            </a>
            <a href={discord_url} target='_blank' className="social-link discord">
                <i className="fa-brands fa-discord"></i>
            </a>
            <a href={twitter_url} className="social-link twitter">
                <i className="fa-brands fa-twitter"></i>
            </a>
        </div>
    )
}
