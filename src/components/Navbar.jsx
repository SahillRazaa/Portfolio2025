import React, { useState } from 'react';
import styled from 'styled-components';
import MyLogo from '../assets/mylogo.png';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Container = styled.div`
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
`;
const MotionContainer = motion.create(Container)

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
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  font-size: 1.1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #0467d5;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #0467d5;
    &::after {
      width: 100%;
    }
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
    transition: all 0.2 ease;
    transform: scale(1.1);
    background: transparent;
    color: #0467d5;
    border-color: #0467d5;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = ['Home', 'Me', 'Projects', 'Experience', 'Contact'];

  const getLinkHref = (item) => {
    const anchor = item.toLowerCase();
    return anchor === 'home' ? '/' : (isHome ? `#${anchor}` : `/#${anchor}`);
  };

  return (
    <MotionContainer
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
          <MenuItem
            as={motion.li}
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <MenuLink href={getLinkHref(item)} onClick={closeMenu}>
              {item}
            </MenuLink>
          </MenuItem>
        ))}
      </NavMenu>

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
    </MotionContainer>
  );
};

export default Navbar;
