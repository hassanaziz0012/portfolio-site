import React from 'react'
import './Sidebar.css'


interface itemType {
    name: string,
    url: string
}

export default function Sidebar({ title, items }: { title: string, items: itemType[] }) {
    return (
        <div className='sidebar'>
            <h2>{title}</h2>

            <ul className="sidebar-links list-style-none">
            {items.map((item, i) => (
                <li className="sidebar-item" key={i}>
                    <a href={item.url}className="link yellow-link mb-2">{item.name}</a>
                </li>
            ))}
            </ul>

        </div>
    )
}
