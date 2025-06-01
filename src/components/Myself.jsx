import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import Wormhole from '../container/Warmhole';
import { useInView } from 'react-intersection-observer';

import Certimate from '../assets/brands/certimate.png';
import Wams from '../assets/brands/WAMS.png';

const brands = [Certimate, Wams];

// Styled Components
const Container = styled(motion.div)`
  display: flex;
  padding: 2vw 10vw;
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
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 1.5rem;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  margin-bottom: 1.5rem;
  will-change: transform, opacity;
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

  @media (max-width: 1024px) {
    width: 100%;
    max-width: none;
  }
`;

// Framer Motion Variants
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
          <Title variants={titleVariants}>Current Project</Title>
          <Description variants={descriptionVariants}>
            Building a modern CMT (Conference Management Tool) alternative under Certimate Infotech—focused on transforming the academic conference workflow with a clean UI, efficient automations, and seamless communication tools.
            The platform includes bulk certificate generation, automated email dispatch, and robust form handling. Designed for scalability, security, and real-time collaboration, it modernizes outdated legacy systems.
          </Description>
          <TechTags>
            {[
              'React.js',
              'Node.js',
              'Express.js',
              'MySQL',
              'VPS Deployment',
              'Docxtemplater',
              'Brevo API',
              'JWT',
              'Multer',
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