import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectDetails } from '../utils/data';
import styled from 'styled-components';
import { FaCheckCircle, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  padding: 0rem 10vw;
  margin: auto;

  @media (max-width: 768px) {
    // padding: 0rem 5vw;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  border: 1px solid rgb(201, 218, 237);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled(motion.div)`
  flex: 1;
`;

const RightSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 0.6rem;

  button {
    background-color: #333;
    color: white;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }
`;

const GitHubButton = styled(motion.a)`
  padding: 10px 24px;
  border-radius: 10px;
  background: #0467d5;
  cursor: pointer;
  color: white;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 2px solid transparent;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 0px 5px 1px #0467d5;
    border-color: #0467d5;
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 0.8rem;
  }
`;

const SectionTitle = styled(motion.h2)`
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FeatureList = styled(motion.ul)`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
    background: #e6f5ea;
    padding: 0.5rem 1rem;
    border-radius: 12px;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const TechGrid = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  img {
    height: 50px;
    width: auto;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const MiddleContainer = styled(motion.div)`
  display: flex;
  align-items: stretch;
  gap: 20px;
  margin: 20px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const MidLeft = styled(motion.div)`
  flex: 1;
  width: calc(100% - 80px);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  border: 1px solid rgb(201, 218, 237);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 20px 40px;

`

const MidMid = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`

const MidRight = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`

const MidCard = styled(motion.div)`
  width: calc(100% - 80px);
  height: calc(100% - 40px);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 32px;
  border: 1px solid rgb(201, 218, 237);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 10px 40px;

`

const MidTitle = styled(motion.h3)`
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

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const MidDesc = styled(motion.p)`
  font-size: 1rem;
  color: black;
  line-height: 1.75;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Image = styled(motion.img)`
  margin-top: 2rem;
  width: 100%;
  border-radius: 16px;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const NoProjects = styled(motion.div)`
  height: calc(100vh - 320px);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 240px);
  }
`;

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

const DetailedProject = ({ projectId }) => {
  const navigate = useNavigate();
  const currentIndex = projectDetails.findIndex(p => p.id === Number(projectId));
  const project = projectDetails[currentIndex];

  const goToProject = (index) => {
    if (index >= 0 && index < projectDetails.length) {
      navigate(`/projects/${projectDetails[index].id}`);
    }
  };

  if (!project) {
    return (
      <NoProjects>
        <p>No project found.</p>
      </NoProjects>
    );
  }

  return (
    <Wrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Card variants={childVariants}>
        <Header variants={childVariants}>
          <LeftSection variants={childVariants}>
            <Title variants={childVariants}>{project.headline}</Title>
            <Description variants={childVariants}>{project.description}</Description>
          </LeftSection>

          <RightSection variants={childVariants}>
            <ButtonGroup variants={childVariants}>
              <button
                onClick={() => goToProject(currentIndex - 1)}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <button
                onClick={() => goToProject(currentIndex + 1)}
                disabled={currentIndex === projectDetails.length - 1}
              >
                Next
              </button>
            </ButtonGroup>
            {project.github && (
              <GitHubButton href={project.github} target="_blank" rel="noopener noreferrer">
                <FaLink/>
                Link
              </GitHubButton>
            )}
          </RightSection>
        </Header>

        <div>
          <SectionTitle variants={childVariants}>Key Features</SectionTitle>
          <FeatureList variants={childVariants}>
            {project.features.map((feat, i) => (
              <li key={i}><FaCheckCircle color="green" /> {feat}</li>
            ))}
          </FeatureList>
        </div>

        <div>
          <SectionTitle variants={childVariants}>Tech Stack</SectionTitle>
          <TechGrid variants={childVariants}>
            {project.techstack.map((src, index) => (
              <img src={src} alt={`Tech ${index}`} key={index} draggable="false" />
            ))}
          </TechGrid>
        </div>
      </Card>

      <MiddleContainer 
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MidLeft variants={childVariants}>
          <MidTitle variants={childVariants}>Problem Statement</MidTitle>
          <MidDesc variants={childVariants}>{project.problemStatement}</MidDesc>
        </MidLeft>
        <MidMid variants={childVariants}>
          <MidCard variants={childVariants}>
            <MidTitle variants={childVariants}>Challenges</MidTitle>
            <MidDesc variants={childVariants}>{project.challenges}</MidDesc>
          </MidCard>
          <MidCard variants={childVariants}>
            <MidTitle variants={childVariants}>Solution Approach</MidTitle>
            <MidDesc variants={childVariants}>{project.solutionApproach}</MidDesc>
          </MidCard>
        </MidMid>
        <MidRight variants={childVariants}>
            <MidCard variants={childVariants}>
              <MidTitle variants={childVariants}>Learnings</MidTitle>
              <MidDesc variants={childVariants}>{project.learning}</MidDesc>
            </MidCard>
            <MidCard variants={childVariants}>
              <MidTitle variants={childVariants}>Impact</MidTitle>
              <MidDesc variants={childVariants}>{project.impact}</MidDesc>
            </MidCard>
          </MidRight>
        </MiddleContainer>
        {project.projectImages.map((item, index) => (
          <Image 
            src={item} 
            alt={`Project Preview ${index}`} 
            key={index}
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </Wrapper>
  );
};

export default DetailedProject;