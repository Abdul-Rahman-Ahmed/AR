import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import { ThemeProvider } from './context/ThemeContext'
import './styles/theme.css'
import './main.css'
import Hero from './components/hero/hero'
import AboutMe from './components/aboutMe/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Header />
    <Hero />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
  </ThemeProvider>
)
