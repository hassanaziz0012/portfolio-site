import React from 'react'
import './NeonButton.css'

export default function NeonButton({ text, url }) {
    return (
        <div className='button neon-button'>
            <a href={url} className='neon-link'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </a>
        </div>
    )
}
