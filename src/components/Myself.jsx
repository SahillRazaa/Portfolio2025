import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import Wormhole from '../container/Warmhole';
import { useInView } from 'react-intersection-observer';

import Certimate from '../assets/brands/certimate.png';
import Wams from '../assets/brands/WAMS.png';
import IIITDMK from '../assets/brands/iiitdm_logo.png'

const brands = [IIITDMK, Certimate, Wams];

const Container = styled(motion.div)`
  display: flex;
  padding: 0vw 10vw;
  height: 100%;
  gap: 2vw;
  align-items: stretch;
  justify-content: center;
`;

const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  max-width: 40vw;
  
  @media (max-width: 1100px) {
    min-width: 100%;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  flex: 1;
  will-change: transform, opacity;
`;

const Title = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0467d5;
  margin-bottom: 1.5rem;
  position: relative;
  will-change: transform, opacity;

  &::after {
    content: '';
    position: absolute;
    top: 120%;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #0467d5;
  }
`;

const Description = styled(motion.p)`
  font-size: 1rem;
  color: black;
  line-height: 1.75;
  text-align: justify;
  margin-bottom: 1.5rem;
  will-change: transform, opacity;

  @media (max-width: 470px) {
    font-size: 0.8rem;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechTag = styled(motion.span)`
  background: #0467d5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0.1);
  will-change: transform, opacity;

  @media (max-width: 470px) {
    font-size: 0.7rem;
  }
`;

const TechScrollContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 1rem 0;
`;

const TechScroll = styled(motion.div)`
  display: flex;
  align-items: center;

  img {
    height: 4.5rem;
    width: auto;
    margin-right: 3rem;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const LogoImage = styled(motion.img)`
  height: 4.5rem;
  width: auto;
  margin-right: 3rem;
  will-change: transform, opacity;
`;

const VisualizationContainer = styled(motion.div)`
  flex: 1;
  aspect-ratio: 2 / 1;
  background: #ffffff;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1.0, 0.36, 1.0],
    },
  },
};

const tagVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'backOut',
    },
  }),
};

const visualVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
};

const logoVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.19, 1.0, 0.22, 1.0],
    },
  }),
};

const Myself = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      id='me'
    >
      <ContentColumn>
      <ProjectCard variants={cardVariants}>
          <Title variants={titleVariants}>Hostel Management System</Title>
          <Description variants={descriptionVariants}>
            Currently building a full-stack hostel portal for my own college something the admin staff can actually use to manage everything from student room allotments to fee records, buildings, and wardens.
            The system is being built from the ground up with a React + Vite dashboard, backed by a Node.js server and PostgreSQL database using Sequelize. I’ve already designed and integrated 10+ relational tables (and counting), covering key hostel workflows.
            <br /><br />
            It includes secure role-based access, so different users, from wardens to the Super Admin can log in and manage only what they’re supposed to. It's one of the biggest real-world apps I’ve worked on so far, and it's teaching me a lot about structuring large-scale backend logic and database relationships.
          </Description>
          <TechTags>
            {[
              'React + Vite',
              'Node.js',
              'Express.js',
              'PostgreSQL',
              'Sequelize ORM',
              'JWT Auth',
              'RBAC',
              'Admin Panel',
            ].map((tech, i) => (
              <TechTag key={tech} custom={i} variants={tagVariants}>
                {tech}
              </TechTag>
            ))}
          </TechTags>
        </ProjectCard>

        <ProjectCard variants={cardVariants}>
          <Title variants={titleVariants}>Experiences</Title>
          <TechScrollContainer>
            <TechScroll
              animate={{
                x: ['0%', '-100%'],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 24,
                    ease: 'linear',
                  },
                },
              }}
            >
              {[...brands, ...brands].map((src, index) => (
                <LogoImage
                  src={src}
                  alt="Company logo"
                  key={index}
                  custom={index % brands.length}
                  variants={logoVariants}
                  initial="hidden"
                  animate={controls}
                />
              ))}
            </TechScroll>
          </TechScrollContainer>
        </ProjectCard>
      </ContentColumn>

      <VisualizationContainer variants={visualVariants}>
        <Wormhole />
      </VisualizationContainer>
    </Container>
  );
};

export default Myself;