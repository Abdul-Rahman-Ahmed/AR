import { useState, useEffect } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, toggleOpenMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropMenu = () => {
    toggleOpenMenu(!openMenu)
  }

  return (
    <header className={scrolled ? 'bg' : ''}>
      <div className="logo color-bg">AR</div>
      <nav>
        <ul className={openMenu ? 'drop-menu' : 'links'}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="nav-buttons">
          <ThemeToggle />
          <button>
            <FontAwesomeIcon
              icon={faBars}
              className="menu-bars"
              onClick={toggleDropMenu}
            />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
