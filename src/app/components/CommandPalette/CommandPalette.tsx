"use client"
import React, { useEffect, useRef, useState } from 'react'
import './CommandPalette.css'
import Popup from '../common/Popup/Popup';
import navLinks from '@/utils/navLinks';

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [selectedNavLinks, setSelectedNavLinks] = useState(navLinks.links);
    const popupElem = useRef();
    const togglePalette = () => {
        setOpen(!open);
        popupElem.current?.classList.toggle("active");
        const section = document.querySelector("section.page");
        if (section.style.filter === "none" || section.style.filter === "") {
            section.style.filter = "blur(20px)";
        } else {
            section.style.filter = "none";
        }
    }

    const closePalette = (e) => {
        // Make sure that user clicked outside popup.
        const popup = e.target.closest(".popup");
        if (!popup || !popup.classList.contains("active")) {
            setOpen(false);
            popupElem.current?.classList.remove("active");
            const section = document.querySelector("section.page");
            section.style.filter = "none";
        }
    }

    const togglePaletteByShortcut = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            // The user pressed either CTRL + K (on Windows/Linux) or Command + K (on macOS)
            togglePalette();            
        }
    }

    useEffect(() => {
        if (open === true) {
            document.querySelector("body").addEventListener("click", closePalette);
            return () => document.querySelector("body").removeEventListener("click", closePalette);
        } else {
            document.addEventListener("keydown", togglePaletteByShortcut);
        }
    }, [open])

    const searchNavLinks = (value) => {
        if (value === "") {
            setSelectedNavLinks(navLinks.links);
        } else {
            const searchString = value.toLowerCase();
            const results = [];
            const search = (link: { name: string; url: string; sublinks?: undefined; } | { name: string; url: string; sublinks: { name: string; url: string; }[]; }) => {
                if (link.name.toLowerCase().includes(searchString)) {
                    results.push(link);
                }
    
                if (link.sublinks) {
                    link.sublinks.forEach(sublink => search(sublink))
                }
            }
            navLinks.links.forEach(link => search(link));
            setSelectedNavLinks(results);
        }
    }

    return (
        <div className='command-palette'>
            <div className="launcher-container">
                <button className="launch-palette" onClick={togglePalette}>
                    <span>⌘ K | Search the site</span>
                </button>
            </div>

            <Popup reference={popupElem}>
                <input type="text" name="command" id="command" placeholder='Search for pages or projects' className='command-input' onChange={(e) => searchNavLinks(e.target.value)} autoFocus />
                {/* <p className='text-sm text-muted'>*This currently only searches my projects.</p> */}
                <hr />
                <ul className="nav-links">
                    {selectedNavLinks.map((link, i) => (
                        <li className="nav-item" key={i}><a href={link.url} className="nav-link" download={link.type === "download" ? true : false} >{link.name}</a></li>
                    ))}
                </ul>
            </Popup>
        </div>
    )
}
