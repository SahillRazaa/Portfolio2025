import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MyLogo from '../assets/mylogo.png';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const FooterContainer = styled(motion.footer)`
  height: 80px;
  padding: 0 40px;
  margin: 40px 80px;
  border-radius: 100px;
  background: white;
  border: 1px solid rgb(201, 218, 237);
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 20px;
    gap: 1rem;
  }
`;

const LeftSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 860px) {
    display: none;
  }
`;

const LogoImage = styled(motion.img)`
  width: 30px;
`;

const LogoTitle = styled(motion.p)`
  color: black;
  font-size: 1.2rem;
  font-weight: 520;
`;

const CenterSection = styled(motion.div)`
  font-size: 0.95rem;
  text-align: center;
  color: #555;
`;

const RightSection = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #0467d5;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 5px rgba(4, 103, 213, 0.6);
    border-color: #0467d5;
    background: white;
    color: #0467d5;
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
      staggerChildren: 0.1,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
}

const Footer = () => {
  return (
    <FooterContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <LeftSection variants={childVariants}>
        <LogoImage src={MyLogo} alt="My Logo" />
        <LogoTitle>Sahil Raza</LogoTitle>
      </LeftSection>

      <CenterSection variants={childVariants}>
        &copy; {new Date().getFullYear()} Sahil Raza Ansari. All rights reserved.
      </CenterSection>

      <RightSection variants={childVariants}>
        <SocialButton
          href="https://github.com/SahillRazaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub />
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/sahil-raza-ansari-7b1b98270/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiLinkedin />
        </SocialButton>
        <SocialButton
          href="https://x.com/RazaSahil7170"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiTwitter />
        </SocialButton>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;