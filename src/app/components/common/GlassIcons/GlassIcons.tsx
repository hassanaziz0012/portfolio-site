import React from 'react'
import './GlassIcons.css'
import FAIcon from '../FAIcon/FAIcon'
import GlassIcon from '../GlassIcon/GlassIcon'

export default function GlassIcons({ icons }) {
    return (
        <div className='glass-container'>
            {icons.map((icon, i) => (
                <GlassIcon icon={icon.icon} name={icon.name} rotateDeg={icon.rotateDeg} key={i} />
            ))}            
        </div>
    )
}
