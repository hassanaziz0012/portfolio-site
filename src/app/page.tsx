import './css/nord.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeChangeButton from './components/ThemeChangeButton/ThemeChangeButton';
import Script from 'next/script';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import { createDefaultProjects } from '../../prisma/db/project';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

export default function Home() {
    // createDefaultProjects();
    return (
        <main>
            <ThemeChangeButton />

            <About />
            <Projects />
            <Skills />
            <Contact />

            <section className="footer">
                <div className="footer-content d-flex flex-column align-items-center justify-content-center pt-3">
                    <p>&copy; Hassan Aziz - Thanks for stopping by!</p>
                </div>
            </section>

            <Script src='https://kit.fontawesome.com/8f8a8c35a9.js' />
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' />

        </main>
    )
}
