import { NavLink } from 'react-router-dom'
import { Squeeze as Hamburger } from 'hamburger-react'
import './Menu.css'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`menu-wrapper ${isOpen ? 'menu-wrapper-expand' : ''}`}>
      <div className= 'square'>
        <Hamburger  toggled={isOpen} toggle={setIsOpen} color={isOpen ? '#fff' : '#000'}/>
      </div>
    </div>
  )
}

export default Header