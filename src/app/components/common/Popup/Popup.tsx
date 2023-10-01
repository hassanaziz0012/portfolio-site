import React from 'react'
import './Popup.css'

export default function Popup({ reference, children }) {
    return (
        <div className='popup' ref={reference}>
            {children}
        </div>
    )
}
