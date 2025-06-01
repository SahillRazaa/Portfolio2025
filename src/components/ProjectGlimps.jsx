import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projectDisplay } from '../utils/data'

const Container = styled(motion.div)`
  padding: 0 10vw;
  padding-bottom: 2rem;
  position: relative;
`

const ProjectContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
`

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  color: #0a2540;
  margin: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 4rem;
    height: 4px;
    background: #0467d5;
    border-radius: 2px;
  }
`

const SeeMoreButton = styled(motion.button)`
  background-color: #0467d5;
  color: white;
  border: none;
  padding: 1rem 3rem;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #0a2540;
    transform: translateY(-2px);
  }
`

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 32px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.12);
  }
`

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectTitle = styled(motion.h3)`
  font-size: 2rem;
  color: #0a2540;
  margin: 0 0 0.5rem 0;
`

const ProjectDate = styled(motion.p)`
  font-size: 1rem;
  color: #6b7c93;
  margin: 0;
  font-weight: 500;
`

const ViewButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #0467d5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0a2540;
    transform: translateY(-2px);
  }
`

const ImagePlaceholder = styled(motion.img)`
  width: 100%;
  height: 55vh;
  border-radius: 24px;
  object-fit: cover;
  margin-top: 1.5rem;
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
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

const ProjectGlimps = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  useEffect(() => {
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
      id='projects'
    >
      <Header variants={headerVariants}>
        <SectionTitle>Recent Work</SectionTitle>
        <Link style={{textDecoration: "none"}} to='/projects'>
          <SeeMoreButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </SeeMoreButton>
        </Link>
      </Header>

      <ProjectContainer variants={containerVariants}>
        {projectDisplay.slice(0, 2).map((project, index) => (
          <ProjectCard
            key={project.id}
            variants={projectCardVariants}
          >
            <TopSection>
              <InfoSection>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{project.duration}</ProjectDate>
              </InfoSection>
              <Link style={{textDecoration: "none"}} to={`/projects/${project.id}`}>
                <ViewButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View
                </ViewButton>
              </Link>
            </TopSection>
            <ImagePlaceholder src={project.image} />
          </ProjectCard>
        ))}
      </ProjectContainer>
    </Container>
  )
}

export default ProjectGlimps