import { NavLink } from 'react-router-dom'
import { Squeeze as Hamburger } from 'hamburger-react'
import './Menu.css'
import { useEffect, useState } from 'react'

const Header = () => {
  type NavItem = {
    label: string;
    path: string;
  };
  const navItems: NavItem[] = [
    { label: 'home', path: '/' },
    { label: 'works', path: '/works' },
    { label: 'about', path: '/about' },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const [menuOpacity, setMenuOpacity] = useState<string>('0');
  const [overlayerShow, setOverlayerShow] = useState<Boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setOverlayerShow(true)
      const showTimer = setTimeout(() => {
        setMenuOpacity('1');
      }, 500);
      return () => {
        clearTimeout(showTimer);
      };
    } else {
      setMenuOpacity('0');
      const closeTimer = setTimeout(() => {
        setShouldRender(false);
        setMenuOpacity('0');
      }, 10);
      const closeLayer = setTimeout(() => {
        setOverlayerShow(false);
      }, 300);
      return () => {
        clearTimeout(closeTimer);
        clearTimeout(closeLayer);
      }
    }
  }, [isOpen]);

  return (
    <>
      {overlayerShow && <div className={`overlayer ${isOpen ? '' : 'fade-out'}`} />}
      <div className={`menu-wrapper ${isOpen ? 'menu-wrapper-expand' : ''}`} style={{ height: isOpen ? '400px' : '48px', width: isOpen ? '550px' : '48px' }}>
        <div className='square'>
          <Hamburger toggled={isOpen} toggle={setIsOpen} color={isOpen ? '#fff' : '#000'} />
        </div>
        {shouldRender && <div className='menu-container' style={{ opacity: menuOpacity }}>
          <div className='top-section'>
            {navItems.map(({ label, path }) => (
              <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsOpen(prev => !prev)}>{label}</NavLink>
            ))}
          </div>
          <div className='bot-section'>
            <div className='first-part'>
              <a>myemail@gmail.com</a>
              <p>
                <span>
                  My &nbsp;
                  <a>Resume</a> | <a>CV</a> | <a>Github</a>
                </span>
              </p>
            </div>
            <div className='second-part'>
              <p className='first-line'>freelancer avaliability</p>
              <div className='second-line'>
                <div className="pulse-wrapper">
                  <div className="pulse-ring delay-0" />
                  <div className="pulse-ring delay-1" />
                  <div className="pulse-core" />
                </div>
                <p>
                  Fully booked till further notice
                </p>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </>
  )
}

export default Header