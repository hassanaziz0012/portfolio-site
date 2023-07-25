import React from 'react'
import NavItem from '../NavItem/NavItem'

export default function Nav() {
    return (
        <div className="nav-links col-md-2 offset-md-1">
            <ul className="nav-list">
                <NavItem text='Projects' url='#projects' />
                <NavItem text='Skills' url='#skills' />
                <NavItem text='Contact' url='#contact' />
            </ul>
        </div>
    )
}
