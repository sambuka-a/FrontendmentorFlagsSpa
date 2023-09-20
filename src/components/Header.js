import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header className='header'>
      <section className='headerContainer'>
        <h1>Where in the world</h1>
        <section>
          <ThemeSwitcher />
        </section>
      </section>
    </header>
  )
}

export default Header