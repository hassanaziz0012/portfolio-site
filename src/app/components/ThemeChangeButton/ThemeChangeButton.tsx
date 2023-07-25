'use client'

import React, { useEffect } from 'react'
import FAIcon from '../FAIcon/FAIcon';

export default function ThemeChangeButton() {
    const multiToggle = (elements: NodeListOf<Element>, classes: string[]) => {
        elements.forEach(elem => {
            classes.forEach(cls => {
                console.log(elem, cls);
                elem.classList.toggle(cls);
            });
        })
    }
    const changeToLight = () => {
        const body = document.querySelector("body");
        const faThemeIcon = document.getElementById("faThemeIcon");

        body?.classList.remove('dark');
        faThemeIcon?.classList.remove("fa-moon");
        faThemeIcon?.classList.add("fa-sun");
        multiToggle(document.querySelectorAll('.yellow-link'), ['yellow-link', 'blue-link']);
        localStorage.setItem("theme", "light");
    }

    const changeToDark = () => {
        const body = document.querySelector("body");
        const faThemeIcon = document.getElementById("faThemeIcon");

        body?.classList.add('dark');
        faThemeIcon?.classList.remove("fa-sun");
        faThemeIcon?.classList.add("fa-moon");
        multiToggle(document.querySelectorAll('.blue-link'), ['yellow-link', 'blue-link']);
        localStorage.setItem("theme", "dark");
    }

    const handleThemeChange = () => {
        const faThemeIcon = document.getElementById("faThemeIcon");

        if (faThemeIcon?.classList.contains("fa-moon")) {
            changeToLight();
        }
        else {
            changeToDark();
        }
    }

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme === "light") {
            changeToLight();
        } else {
            changeToDark();
        }
    }, [])

    return (
        <section className="top-nav d-flex align-items-center justify-content-end container">
            <button className="btn theme-change-button" onClick={handleThemeChange}>
                <FAIcon id='faThemeIcon' icon='fas fa-moon' />
            </button>
        </section>
    )
}
