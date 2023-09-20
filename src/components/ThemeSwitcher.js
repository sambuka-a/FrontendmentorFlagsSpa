import { useState } from "react"
import { useThemeSwitcher } from "react-css-theme-switcher"
import { TbSunMoon } from "react-icons/tb"

import '../index.css';

const ThemeSwitcher = () => {
  const {switcher, themes, currentTheme, status} = useThemeSwitcher()
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      switcher({theme: prev ? themes.light : themes.dark})
      return !prev
    })
  }

  return (
    <section>
      <span>{currentTheme}</span>
      <TbSunMoon className="themeSwithcer" onClick={toggleDarkMode}/>
    </section>
  )
}

export default ThemeSwitcher