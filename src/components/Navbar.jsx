import React, { useState } from 'react';
import styled from 'styled-components';
import MyLogo from '../assets/mylogo.png';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Container = styled(motion.div)`
  height: 80px;
  padding: 20px 40px;
  margin: 40px 80px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgb(201, 218, 237);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 950px) {
    padding: 15px 24px;
    margin: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 30px;
`;

const LogoTitle = styled.p`
  color: black;
  font-size: 1.3rem;
  font-weight: 520;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 950px) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  text-decoration: none;
  color: #111;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.6rem 0;
  border-bottom: 1px solid transparent;

  &:hover {
    color: #0467d5;
    border-bottom: 1px solid #0467d5;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 950px) {
    display: none;
  }
`;

const ResumeButton = styled(motion.button)`
  padding: 10px 24px;
  border-radius: 30px;
  background: #0467d5;
  cursor: pointer;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid transparent;

  &:hover {
    transform: scale(1.1);
    background: transparent;
    color: #0467d5;
    border-color: #0467d5;
  }
`;

const HamBurgerContainer = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 950px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.85);
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
  padding: 90px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 999;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  @media (max-width: 360px) {
    width: 60%;
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 998;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const menuItems = ['Home', 'Me', 'Projects', 'Experience', 'Contact'];

  const getLinkHref = (item) => {
    const anchor = item.toLowerCase();
    return anchor === 'home' ? '/' : isHome ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <>
      <Container
        initial={{ y: -50, opacity: 0, filter: 'blur(5px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Logo
          as={motion.div}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <LogoImage src={MyLogo} />
          <LogoTitle>Sahil Raza</LogoTitle>
        </Logo>

        <NavMenu
          as={motion.ul}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <MenuLink href={getLinkHref(item)} onClick={closeMenu}>
                {item}
              </MenuLink>
            </motion.div>
          ))}
        </NavMenu>

        <HamBurgerContainer onClick={toggleMenu}>
          <Menu size={28} />
        </HamBurgerContainer>

        <ActionGroup
          as={motion.div}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <Link style={{ textDecoration: 'none' }} to="/my-resume">
            <ResumeButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.01 }}
            >
              Resume
            </ResumeButton>
          </Link>
        </ActionGroup>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Backdrop
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <MobileMenu
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div style={{ alignSelf: 'flex-end', cursor: 'pointer' }} onClick={closeMenu}>
                <X size={28} />
              </div>
              {menuItems.map((item) => (
                <MenuLink
                  key={item}
                  href={getLinkHref(item)}
                  onClick={closeMenu}
                  style={{ fontSize: '1.2rem' }}
                >
                  {item}
                </MenuLink>
              ))}
              <Link to="/my-resume" style={{textDecoration: "none"}} onClick={closeMenu}>
                <ResumeButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Resume
                </ResumeButton>
              </Link>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;