"use client"
import React, { useEffect, useRef, useState } from 'react'
import './CommandPalette.css'
import Popup from '../common/Popup/Popup';
import navLinks from '@/utils/navLinks';
import SocialIcons from '../SocialIcons/SocialIcons';

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [selectedNavLinks, setSelectedNavLinks] = useState(navLinks.links);
    const popupElem = useRef<any>();
    const togglePalette = () => {
        setOpen(!open);
        popupElem.current?.classList.toggle("active");
        const section: any = document.querySelector("section.page");
        if (section.style.filter === "none" || section.style.filter === "") {
            section.style.filter = "blur(20px)";
        } else {
            section.style.filter = "none";
        }
    }

    const closePalette = () => {
        // Make sure that user clicked outside popup.
        setOpen(false);
        popupElem.current?.classList.remove("active");
        const section: any = document.querySelector("section.page");
        section.style.filter = "none";
    }

    const shouldClosePalette = (e) => {
        const popup = e.target.closest(".popup");
        if (!popup || !popup.classList.contains("active")) {
            closePalette();
        }
    }

    const togglePaletteByShortcut = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            // The user pressed either CTRL + K (on Windows/Linux) or Command + K (on macOS)
            togglePalette();            
        }
        // Close palette by Esc key.
        if (e.key.toLowerCase() === "escape") {
            closePalette();
        }
    }

    useEffect(() => {
        if (open === true) {
            document.querySelector("body")?.addEventListener("click", shouldClosePalette);
            return () => document.querySelector("body")?.removeEventListener("click", shouldClosePalette);
        } else {
            document.addEventListener("keydown", togglePaletteByShortcut);
        }
    }, [open])

    const searchNavLinks = (value) => {
        if (value === "") {
            setSelectedNavLinks(navLinks.links);
        } else {
            const searchString = value.toLowerCase();
            const results: any = [];
            const search = (link) => {
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
                <hr />
                <ul className="nav-links">
                    {selectedNavLinks.map((link, i) => (
                        <li className="nav-item" key={i}><a href={link.url} className="nav-link" download={link.type === "download" ? true : false} >{link.name}</a></li>
                    ))}
                </ul>
                <hr />
                <SocialIcons style="nohover" />
            </Popup>
        </div>
    )
}
