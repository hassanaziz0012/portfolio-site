import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './css/style.css';
import './css/theme.css';
// import './css/themes/nord.css';
import './css/themes/harmony.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import ThemeChangeButton from './components/ThemeChangeButton/ThemeChangeButton';


export const metadata: Metadata = {
    title: 'Hassan Aziz - Web Developer',
    description: "Freelance web developer",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className='dark'>
                {children}
            </body>
            <Script src='https://kit.fontawesome.com/8f8a8c35a9.js' />
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' />
        </html>
    )
}
