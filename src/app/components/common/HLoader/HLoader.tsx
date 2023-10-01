import React from 'react';
import './HLoader.css'

export default function HLoader() {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="face face1">
                    <div className="circle"></div>
                </div>
                <div className="face face2">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    )
}
