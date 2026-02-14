import { useTheme } from '../../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
    </button>
  )
}

export default ThemeToggle
