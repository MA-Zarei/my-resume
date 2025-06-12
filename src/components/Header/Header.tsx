import { Squeeze as Humburger } from 'hamburger-react'
import Menu from '../Menu/Menu'
import './Header.css'

const Header = () => {
  return (
    <header>
      <p className='name'>M. Amin Zarei</p>
      <Menu />
      {/* <Humburger /> */}
    </header>
  )
}

export default Header