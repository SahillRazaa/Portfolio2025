import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocation } from 'react-router-dom'
import MySelf from '../assets/me.png'
import { FiMapPin, FiArrowUpRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const animationDelay = {
  title: '0s',
  subtitle: '0.2s',
  buttons: '0.4s'
}

const Container = styled(motion.div)`
  width: 100vw;
  height: calc(100vh - 160px);
  background-size: 400% 400%;
  animation: ${gradientBackground} 15s ease infinite;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100%;
  }
`

const HeroContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 0 10vw 40px;
  gap: 2vw;

  @media (max-width: 1024px) {
    flex-direction: column;
    // padding: 0 6vw 40px;
  }

  @media (max-width: 768px) {
    // padding: 0 6vw 20px;
  }
`

const HeroLeft = styled.div`
  flex: 2;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  border: 1px solid rgb(201, 218, 237);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 20px;
    padding-bottom: 100px;
  }
`

const TitleContainer = styled.div`
  z-index: 2;
`

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: #050505;
  animation: ${fadeIn} 0.8s ease-out ${animationDelay.title} backwards;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

const Highlight = styled.span`
  color: #0467d5;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 12px;
    background: rgba(4, 102, 213, 0.47);
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
  animation: ${fadeIn} 0.8s ease-out ${animationDelay.subtitle} backwards;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 3rem;
  animation: ${fadeIn} 0.8s ease-out ${animationDelay.buttons} backwards;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
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
  border: 1.5px solid;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: #0467d5;
    color: white;

    &:hover {
      color: black;
      background: transparent;
      border-color: black;
      transform: translateY(-2px);
    }
  }

  &.secondary {
    color: black;
    background: transparent;
    border-color: black;

    &:hover {
      background: #0467d5;
      color: white;
      transform: translateY(-2px);
    }
  }
`

const Location = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #0467d5;
  position: absolute;
  bottom: 40px;
  left: 40px;
  backdrop-filter: blur(8px);
  border: 1px solid rgb(201, 218, 237);

  svg {
    color: #ff0000;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    left: 20px;
    font-size: 0.75rem;
  }
`

const BigName = styled.div`
  position: absolute;
  top: 45%;
  left: -10%;
  transform: translateY(-50%);
  font-size: 22rem;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.1);
  z-index: 0;
  user-select: none;
  white-space: nowrap;
  letter-spacing: -12px;

  @media (max-width: 768px) {
    font-size: 10rem;
  }

  @media (max-width: 480px) {
    // font-size: 6rem;
    left: -5%;
  }
`

const MyImage = styled.img`
  width: 40%;
  position: absolute;
  bottom: 0;
  right: 50px;
  z-index: 99;
  border-radius: 24px 24px 0 0;
  filter: drop-shadow(5px 5px 5px grey);

  @media (max-width: 1024px) {
    display: none;
  }
`

const Hero = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [location])

  return (
    <Container
      id="home"
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
              Full-stack developer crafting modern web & mobile apps with performance, accessibility,
              and user delight at the core. Passionate about shipping real-world solutions that make a difference.
            </Subtitle>
            <ButtonGroup>
              <Button href="/projects" className="primary">
                Explore Work <FiArrowUpRight />
              </Button>
              <Button href="#contact" className="secondary">
                Let&apos;s Connect
              </Button>
            </ButtonGroup>
          </TitleContainer>

          <Location>
            <FiMapPin />
            Based in Chennai, IN
          </Location>

          <BigName>SAHILRAZA</BigName>
          <MyImage src={MySelf} alt="Portrait of Sahil Raza" />
        </HeroLeft>
      </HeroContainer>
    </Container>
  )
}

export default Hero
