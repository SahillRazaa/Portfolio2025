import React from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ReactImage from '../assets/react.png';
import NodeImage from '../assets/node.png';
import MongoDbImage from '../assets/mongodb.png';
import FlutterImage from '../assets/flutter.png';
import FirebaseImage from '../assets/firebase.png';
import PostmanImage from '../assets/postman.png';
import PythonImage from '../assets/Python.png';
import GithubImage from '../assets/github.png';
import CPlusImage from '../assets/C++.png';
import FigmaImage from '../assets/figma.png';
import WixImage from '../assets/Wix.png';
import WordPressImage from '../assets/wordpress.png';
import HtmlImage from '../assets/html.png';
import CssImage from '../assets/css.png';
import JavaScriptImage from '../assets/javascript.png';
import DartImage from '../assets/dart.png';
import MySqlImage from '../assets/mysql.png';
import PostgresImage from '../assets/postgresql.png';

const techStack = [
  ReactImage,
  NodeImage,
  MongoDbImage,
  FlutterImage,
  FirebaseImage,
  PostmanImage,
  PythonImage,
  MySqlImage,
  PostgresImage,
  GithubImage,
  CPlusImage,
  FigmaImage,
  WixImage,
  WordPressImage,
  HtmlImage,
  CssImage,
  JavaScriptImage,
  DartImage,
];

const Container = styled(motion.div)`
  display: flex;
  padding: 2vw 10vw;
  height: 100%;
  gap: 2vw;
  align-items: stretch;
  justify-content: center;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  flex: 1;
`;

const Title = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0467d5;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 120%;
    left: 0px;
    width: 60px;
    height: 3px;
    background-color: #0467d5;
  }
`;

const TechScrollContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 1rem 0;
`;

const TechLogos = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem 4rem;
  padding: 20px;

  img {
    height: 4.5rem;
    width: auto;
    transition: all 0.3s ease;

    &:hover {
      filter: grayscale(0);
      opacity: 1;
    }

    @media (max-width: 800px) {
      height: 3rem;
    }

    @media (max-width: 500px) {
      height: 1.5rem;
    }

    @media (max-width: 370px) {
      height: 1.2rem;
    }
  }

  @media (max-width: 800px) {
    gap: 2rem 3rem;
  }

  @media (max-width: 500px) {
    gap: 1.5rem 2rem;
  }

  @media (max-width: 500px) {
    gap: 1.2rem 2rem;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const projectCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'backOut',
    },
  }),
}

const TechStacks = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Container
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <ProjectCard variants={projectCardVariants}>
        <Title variants={titleVariants}>Technologies</Title>
        <TechScrollContainer>
          <TechLogos
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {techStack.map((src, index) => (
              <motion.img
                src={src}
                alt="Technology logo"
                key={index}
                variants={logoVariants}
                custom={index}
                draggable="false"
              />
            ))}
          </TechLogos>
        </TechScrollContainer>
      </ProjectCard>
    </Container>
  )
}

export default TechStacks;