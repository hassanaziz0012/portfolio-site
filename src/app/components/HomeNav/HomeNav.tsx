'use client'
import React, { useEffect, useState } from 'react'
import NavItem from '../HomeNavItem/HomeNavItem'
import './HomeNav.css'


export default function Nav() {
    const [width, setWidth] = useState<number>(1920);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleWidthChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidthChange);
        return () => {
            window.removeEventListener('resize', handleWidthChange)
        }
    }, [handleWidthChange])

    useEffect(() => setWidth(window.innerWidth), [])

    return (
        <div className="nav-links col-md-3 offset-md-1">
            {
            width > 768 ? (
                <ul className="nav-list">
                    <NavItem text='Projects' url='/projects' />
                    <NavItem text='Contact' url='/contact' />
                </ul>
                )
                :
                <div className="nav-list row col-lg-6 mt-3 mb-5">
                    <NavItem text='Projects' url='/projects' />
                    <NavItem text='Contact' url='/contact' />
                </div>
            }
        </div>
    )
}
