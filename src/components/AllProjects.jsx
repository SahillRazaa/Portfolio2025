import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import FilterModal from '../utils/FilterModal'
import { projectDisplay } from '../utils/data'
import { Link } from 'react-router-dom'

const Container = styled(motion.div)`
  padding: 0 10vw;
  padding-bottom: 2rem;
  position: relative;

  @media (max-width: 768px) {
    // padding: 0 vw;
  }
`

const ProjectContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  color: #0a2540;
  margin: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 3rem;
    height: 3px;
    background: #0467d5;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
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

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`

const Controls = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 2rem;
  }
`

const ToggleGroup = styled(motion.div)`
  display: flex;
  background: #f0f4f8;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const ToggleButton = styled(motion.button)`
  background: ${({ active }) => (active ? '#0467d5' : 'white')};
  color: ${({ active }) => (active ? '#fff' : '#0a2540')};
  border: none;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0467d5;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
`

const FilterButton = styled(motion.button)`
  background-color: #0467d5;
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;

  &:hover {
    background-color: #0a2540;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

const TopSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

const InfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const ProjectTitle = styled(motion.h3)`
  font-size: 2rem;
  color: #0a2540;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const ProjectDate = styled(motion.p)`
  font-size: 1rem;
  color: #6b7c93;
  margin: 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
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
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #0a2540;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`

const ImagePlaceholder = styled(motion.img)`
  width: 100%;
  height: 40vh;
  border-radius: 24px;
  object-fit: cover;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    height: 30vh;
  }
`

const NoProjects = styled(motion.div)`
  height: calc(100vh - 320px - 120px);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 240px - 100px);
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
}

const AllProjects = () => {
  const [activeType, setActiveType] = useState('Personal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: 'recent',
    techType: 'all',
    difficulty: 'all',
  });

  const filteredProjects = projectDisplay
    .filter(p => p.type === activeType)
    .filter(p => filters.techType === 'all' || p.techType === filters.techType)
    .filter(p => filters.difficulty === 'all' || p.difficulty === filters.difficulty)
    .sort((a, b) => {
      if (filters.sortBy === 'recent') return new Date(b.date) - new Date(a.date);
      if (filters.sortBy === 'leastRecent') return new Date(a.date) - new Date(b.date);
      if (filters.sortBy === 'lengthy') return b.length - a.length;
      if (filters.sortBy === 'quicky') return a.length - b.length;
      return 0;
    });

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header variants={childVariants}>
        <SectionTitle variants={childVariants}>All Projects</SectionTitle>
        <Controls variants={childVariants}>
          <ToggleGroup>
            <ToggleButton
              active={activeType === 'Personal'}
              onClick={() => setActiveType('Personal')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Personal
            </ToggleButton>
            <ToggleButton
              active={activeType === 'Company'}
              onClick={() => setActiveType('Company')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Company
            </ToggleButton>
            <ToggleButton
              active={activeType === 'Hackathon'}
              onClick={() => setActiveType('Hackathon')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hackathon / Assignment
            </ToggleButton>
          </ToggleGroup>
          <FilterButton
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Filter
          </FilterButton>
        </Controls>
      </Header>

      {filteredProjects.length !== 0 ?
        <ProjectContainer
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <TopSection variants={childVariants}>
                <InfoSection variants={childVariants}>
                  <ProjectTitle variants={childVariants}>{project.title}</ProjectTitle>
                  <ProjectDate variants={childVariants}>{project.duration}</ProjectDate>
                </InfoSection>
                <Link style={{ textDecoration: "none" }} to={`/projects/${project.id}`}>
                  <ViewButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View
                  </ViewButton>
                </Link>
              </TopSection>
              <ImagePlaceholder
                src={project.image}
                variants={childVariants}
              />
            </ProjectCard>
          ))}
        </ProjectContainer>
        :
        <NoProjects variants={childVariants}>
          <p>No projects Found.</p>
        </NoProjects>}
      {isModalOpen && (
        <FilterModal
          onClose={() => setIsModalOpen(false)}
          filters={filters}
          setFilters={setFilters}
        />
      )}
    </Container>
  );
};

export default AllProjects;