import { NavLink, useNavigate } from 'react-router-dom'
import { Squeeze as Hamburger } from 'hamburger-react'
import './Menu.css'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { texts } from '../../Constants/texts.ts'
import Overlay from '../Overlay/Overlay.tsx';

const SECTION_EXIT_DURATION = 800; // ms, adjust to match your section exit animation

type NavItem = {
  label: string;
  path: string;
};
const topContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // stagger children in top section
      delayChildren: 0.8, // top section starts after menu expands
      staggerDirection: 1, // normal order on enter
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1, // reverse order on exit (top leaves last)
      delayChildren: 0.3,   // delay top exit until bot is done
    },
  },
};
const botContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.4, // bot section starts later than top section
      staggerDirection: 1, // normal order on enter
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.15,
      staggerDirection: 1, // bot leaves first
      delayChildren: 0,    // bot exits immediately
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeInOut } },
  exit: { opacity: 0, y: 30, transition: { duration: 0.4, ease: easeInOut } },
};
const navItems: NavItem[] = [
  { label: 'home', path: '/' },
  { label: 'works', path: '/works' },
  { label: 'about', path: '/about' },
];

const Header: React.FC = () => {
  const colorTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isExitingSections, setIsExitingSections] = useState<boolean>(false);
  const [hamburgerColor, setHamburgerColor] = useState<string>('#000');
  const navigate = useNavigate();

  // Handle open/close logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setHamburgerColor('#fff'); // Set to white immediately on open
      setShowMenu(true);
      setIsExitingSections(false);
    } else if (showMenu) {
      setIsExitingSections(true);
      colorTimeout.current = setTimeout(() => {
        setHamburgerColor('#000');
        document.body.style.overflow = '';
      }, SECTION_EXIT_DURATION + 700);
      closeTimeout.current = setTimeout(() => {
        setShowMenu(false);
      }, SECTION_EXIT_DURATION);
    }
    return () => {
      if (colorTimeout.current) clearTimeout(colorTimeout.current);
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Handler for nav item click
  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false); // Start exit animation
    setTimeout(() => {
      navigate(path);
    }, SECTION_EXIT_DURATION + 800); // Adjust delay to match your full exit animation (menu + container)
  };

  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <Overlay onClick={() => setIsOpen(!isOpen)} />
        )}
      </AnimatePresence>
      <motion.div className='menu-wrapper'>
        <div className='menu-toggle'>
          <Hamburger toggled={isOpen} toggle={setIsOpen} color={hamburgerColor} />
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className='menu-container'
              initial={{ backgroundColor: 'rgba(0,0,0,0)', width: '48px', height: '48px' }}
              animate={{
                backgroundColor: 'rgba(0,0,0,1)',
                width: '550px',
                maxWidth: '90vw',
                maxHeight: '60vh',
                height: '416px',
                transition: {
                  backgroundColor: { duration: 0.3 },
                  width: { delay: 0.3, duration: 0.5, ease: [0.6, 0.04, 0.64, 0.42] },
                  height: { delay: 0.3, duration: 0.5, ease: [0.6, 0.04, 0.64, 0.42] },
                },
              }}
              exit={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(0,0,0,0)',
                transition: {
                  width: { duration: 0.5, ease: [0.6, 0.04, 0.64, 0.42] },
                  height: { duration: 0.5, ease: [0.6, 0.04, 0.64, 0.42] },
                  backgroundColor: { delay: 0.5, duration: 0.3 },
                },
              }}
            >
              <AnimatePresence>
                {!isExitingSections && (
                  <>
                    <motion.div
                      className='top-section'
                      variants={topContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      {navItems.map(({ label, path }) => (
                        <motion.div key={path} variants={itemVariants}>
                          <NavLink
                            to={path}
                            className={({ isActive }) => isActive ? 'active-nav' : ''}
                            onClick={handleNavClick(path)}
                          >
                            {label}
                          </NavLink>
                        </motion.div>
                      ))}
                    </motion.div>
                    <motion.div
                      className='bot-section'
                      variants={botContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <motion.div className='first-part' variants={itemVariants}>
                        <a href={`mailto:${texts.about.contact.email[1]}`} target='_blank' rel='nofollow'>
                          {texts.about.contact.email[1]}
                        </a>
                        <p>
                          <span>
                            My &nbsp;
                            <a href={texts.Menu.resume} download>Resume</a> | <a href={texts.Menu.github} target='_blank'>Github</a>
                          </span>
                        </p>
                      </motion.div>
                      <motion.div className='second-part' variants={itemVariants}>
                        <p className='first-line'>freelancer availability</p>
                        <div className='second-line'>
                          <div className="pulse-wrapper">
                            <div className="pulse-ring delay-0" />
                            <div className="pulse-ring delay-1" />
                            <div className="pulse-core" />
                          </div>
                          <p>
                            {texts.widgets.availability}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Header