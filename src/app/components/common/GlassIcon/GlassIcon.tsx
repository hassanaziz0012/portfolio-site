import React from 'react'
import './GlassIcon.css'
import FAIcon from '../FAIcon/FAIcon'

export default function GlassIcon({ rotateDeg, name, icon}) {
    return (
        <div className="glass" style={{ "--r": rotateDeg } as React.CSSProperties} data-text={name}>
            <FAIcon icon={icon} />
        </div>
    )
}
