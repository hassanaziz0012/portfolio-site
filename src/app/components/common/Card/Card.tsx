import React from 'react'
import './Card.css'

export default function Card({ className, children }) {
    return (
        <div className={`h-card-container ${className}`}>
            <span className="border-line"></span>
            <div className='h-card'>{children}</div>
        </div>
    )
}
