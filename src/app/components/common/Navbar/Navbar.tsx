import React from "react";
import './Navbar.css';
import ThemeChangeButton from "../../ThemeChangeButton/ThemeChangeButton";
import CommandPalette from "../../CommandPalette/CommandPalette";

export default function Navbar() {
    const items = [
        {
            "name": "Home",
            "url": "/"
        },
        {
            "name": "All Projects",
            "url": "/projects"
        },
        {
            "name": "Contact",
            "url": "/#contact"
        }
    ]
    return (
        <div className="container d-flex align-items-baseline justify-content-end pt-3 pb-3">
            <CommandPalette />
            <ThemeChangeButton />
        </div>
    );
}