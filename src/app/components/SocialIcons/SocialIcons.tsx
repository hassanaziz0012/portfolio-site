import socialLinks from '@/utils/socialLinks'
import React from 'react'
import GlassIcons from '../common/GlassIcons/GlassIcons'

export default function SocialIcons({ style }) {
    return (
        style === "glass" ?
        <GlassIcons icons={socialLinks} />
        :
        <div className="social-links">
            {socialLinks.map((link, i) => (
                <a href={link.url} target='_blank' key={i} className='social-link'>
                    <i className={link.icon}></i>
                </a>
            ))}
        </div>
    )
}
