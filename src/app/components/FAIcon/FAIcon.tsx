'use client'
import React, { FunctionComponent } from 'react'

interface FAIconProps {
    id?: string,
    icon: string
}

const FAIcon: FunctionComponent<FAIconProps> = ({ id = "", icon }) => {
    return (
        <i id={id} className={icon} />
    )
}

export default FAIcon;