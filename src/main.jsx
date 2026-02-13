import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import { ThemeProvider } from './context/themeContext'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Header />
  </ThemeProvider>
)
