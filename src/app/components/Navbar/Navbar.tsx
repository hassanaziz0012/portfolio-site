import React from "react";
import ThemeChangeButton from "../ThemeChangeButton/ThemeChangeButton";

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
        <nav className="navbar navbar-expand-lg d-flex justify-content-end align-items-baseline pt-4">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    {items.map((item, i) => (
                        <li className="nav-item" key={i}>
                            <a href={item.url} className="link yellow-link">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <span>
                <ThemeChangeButton />
            </span>
        </nav>
    );
}