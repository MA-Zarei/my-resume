import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import isUnsupportedBrowser from '../../utils/isUnsupportedBrowser'
import Menu from '../Menu/Menu'
import './Header.css'
import logo from '/m-amin zarei logo.svg'

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <header className={scrolled ? isUnsupportedBrowser() ? 'webKit-glassBG' : 'glassBG' : ''}>
      <div className='header-container'>
        <NavLink to='/'>
          <img src={logo} alt="M. Amin Zarei Logo" className='name' />
        </NavLink>
        <Menu />
      </div>
    </header >
  )
}

export default Header