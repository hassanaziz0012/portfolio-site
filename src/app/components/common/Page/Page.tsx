"use client"
import React, { useEffect, useState } from 'react'
import HLoader from '../HLoader/HLoader';
import Navbar from '../Navbar/Navbar';
import { setInitialTheme } from '@/utils/themes';
import './Page.css';

export default function Page({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInitialTheme();
        setTimeout(() => {
            const onPageLoad = () => {
                console.log("Loaded....");
                setLoading(false);
            }

            if (document.readyState === "complete") {
                onPageLoad();
            } else {
                window.addEventListener("load", onPageLoad, false);
                return () => window.removeEventListener("load", onPageLoad);
            }
        }, 2000);
    }, [])

    return (
        loading === true ? (
            <HLoader />
        ) : (
            <div>
                <Navbar />
                <section className='page'>
                    {children}
                </section>
            </div>
        )
    )
}