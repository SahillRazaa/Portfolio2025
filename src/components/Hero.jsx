import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocation } from 'react-router-dom';
import MySelf from '../assets/me.png'
import { FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 160px);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background-size: 400% 400%;
  animation: ${gradientBackground} 15s ease infinite;
  display: flex;
  flex-direction: column;
  position: relative;
`

const MotionContainer = motion.create(Container)

const HeroContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 0px 10vw;
  padding-bottom: 40px;
  gap: 2vw;
  position: relative;
`

const HeroLeft = styled.div`
  flex: 2;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  border: 1px solid rgb(201, 218, 237);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  position: relative;
  overflow: hidden;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TitleContainer = styled.div`
  z-index: 2;
  padding-left: 20px;
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: #050505;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  animation: ${fadeIn} 0.8s ease-out;

`

const Highlight = styled.span`
  color: #0467d5;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 12px;
    background:rgba(4, 102, 213, 0.47);
    z-index: -1;
    border-radius: 2px;
  }
`

const Subtitle = styled.h2`
  font-size: 1.1rem;
  margin-top: 2rem;
  font-weight: 400;
  max-width: 560px;
  color: #475569;
  line-height: 1.6;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 3rem;
  animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
`

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  font-size: 1rem;
  padding: 14px 32px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1.5px solid;

  &.primary {
    background: #0467d5;
    color: white;

    &:hover {
      color: black;
      background: transparent;
      border: 2px solid black;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    color: black;
    background: transparent;
    border: 2px solid black;

    &:hover {
      background: #0467d5;
      color: white;
      border: none;
      transform: translateY(-2px);
    }
  }
`

const MyImage = styled.img`
  width: 40%;
  position: absolute;
  filter: drop-shadow(5px 5px 5px grey); 
  bottom: 0;
  right: 50px;
  z-index: 1;
  border-radius: 24px 24px 0 0;
  z-index: 99;
`

const Location = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #0467d5;
  background: transparent;
  position: absolute;
  bottom: 40px;
  left: 40px;
  backdrop-filter: blur(8px);
  border: 1px solid rgb(201, 218, 237);

  svg {
    color:rgb(255, 0, 0);
  }
`

const BigName = styled.div`
  position: absolute;
  top: 45%;
  left: -10%;
  transform: translateY(-50%);
  font-size: 22rem;
  font-weight: 900;
  color:rgba(0, 0, 0, 0.10);
  z-index: 0;
  user-select: none;
  pointer-events: none;
  white-space: nowrap;
  letter-spacing: -12px;

`

const Hero = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <MotionContainer id='home'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <HeroContainer>
        <HeroLeft>
          <TitleContainer>
            <Title>
            Turning Ideas<br />
              Into <Highlight>Impactful</Highlight><br />
              Digital Experiences
            </Title>
            <Subtitle>
            Full-stack developer crafting modern web & mobile apps with performance, accessibility, and user delight at the core. Passionate about shipping real-world solutions that make a difference.
            </Subtitle>
            <ButtonGroup>
              <Button href="/projects" className="primary">
                Explore Work
                <FiArrowUpRight />
              </Button>
              <Button href="#contact" className="secondary">
                Let's Connect
              </Button>
            </ButtonGroup>
          </TitleContainer>
          
          <Location>
            <FiMapPin />
            Based in Chennai, IN
          </Location>
          
          <BigName>SAHILRAZA</BigName>
          <MyImage src={MySelf} alt="Sahil Raza" />
        </HeroLeft>
      </HeroContainer>
    </MotionContainer>
  )
}

export default Hero