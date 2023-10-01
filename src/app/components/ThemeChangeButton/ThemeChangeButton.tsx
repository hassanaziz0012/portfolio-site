'use client'
import React, { useEffect } from 'react'
import FAIcon from '../common/FAIcon/FAIcon';
import { changeToDark, changeToLight, handleThemeChange, setInitialTheme } from '@/utils/themes';

export default function ThemeChangeButton() {
    
    useEffect(() => {
        setInitialTheme();
    }, [])

    return (
        <button className="btn theme-change-button" onClick={handleThemeChange}>
            <FAIcon id='faThemeIcon' icon='fas fa-moon' />
        </button>
    )
}
