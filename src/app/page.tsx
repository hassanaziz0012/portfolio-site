import ThemeChangeButton from './components/ThemeChangeButton/ThemeChangeButton';
import About from './components/About/About';
import Projects from './components/ProjectsGrid/ProjectsGrid';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

export default function Home() {
    return (
        <main>

            <About />
            <Projects />
            <Skills />
            <Contact />

            <section className="footer">
                <div className="footer-content d-flex flex-column align-items-center justify-content-center pt-3">
                    <p>&copy; Hassan Aziz - Thanks for stopping by!</p>
                </div>
            </section>

        </main>
    )
}
