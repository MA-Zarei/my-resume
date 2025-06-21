import { useEffect, useState } from 'react'
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
    <header className={scrolled ? 'glassBG' : '' }>
      <p className='name'>M. Amin Zarei</p>
      <Menu />
    </header >
  )
}

export default Header