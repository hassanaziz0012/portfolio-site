import React from 'react'

export default function NavItem({ text, url }: {text: string, url: string}) {
    return (
        <li className="nav-item"><a href={url} className="nav-link">{text}</a></li>
    )
}
