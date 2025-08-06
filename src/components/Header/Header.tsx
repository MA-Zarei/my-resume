import { useEffect, useState } from 'react'
import isUnsupportedBrowser from '../../utils/isUnsupportedBrowser'
import Menu from '../Menu/Menu'
import './Header.css'

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
        <p className='name'>M. Amin Zarei</p>
        <Menu />
      </div>
    </header >
  )
}

export default Header