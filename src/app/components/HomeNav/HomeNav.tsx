'use client'
import React, { useEffect, useState } from 'react'
import NavItem from '../HomeNavItem/HomeNavItem'
import './HomeNav.css'
import socialLinks from '@/utils/socialLinks'


export default function Nav() {
    const emailUrl = socialLinks.filter((link) => link.name === "Email")[0].url

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
                    <NavItem text='Mail me' url={emailUrl} />
                </ul>
                )
                :
                <div className="nav-list row col-lg-6 mt-3 mb-5">
                    <NavItem text='Projects' url='/projects' />
                    <NavItem text='Mail me' url={emailUrl} />
                </div>
            }
        </div>
    )
}
