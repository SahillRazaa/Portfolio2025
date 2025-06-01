import React from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ReactImage from '../assets/react.png';
import NodeImage from '../assets/node.png';
import MongoDbImage from '../assets/mongodb.png';
import { achievements } from '../utils/data';

const Container = styled(motion.div)`
  display: flex;
  padding: 2vw 10vw;
  height: 100%;
  gap: 2vw;
  align-items: stretch;
  justify-content: center;
`;

const AchievementCard = styled(motion.div)`
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

const AchievementItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const LogoWrapper = styled(motion.div)`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const InfoSection = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 1.2rem;
    color: #0467d5;
    margin: 0 0 0.3rem 0;
  }

  p {
    font-size: 0.95rem;
    color: #6b7c93;
    margin: 0 0 0.3rem 0;
  }
`;

const DateSection = styled(motion.div)`
  flex-shrink: 0;
  font-size: 0.95rem;
  color: #6b7c93;
  text-align: right;
  min-width: 100px;
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

const achievementCardVariants = {
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

const achievementItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'backOut',
    },
  }),
}

const Achievement = () => {
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
      <AchievementCard variants={achievementCardVariants}>
        <Title variants={titleVariants}>Achievements</Title>
        {achievements.map((item, index) => (
          <AchievementItem
            key={item.id}
            variants={achievementItemVariants}
            custom={index}
          >
            <LogoWrapper>
              <img src={item.logo} alt={item.title} draggable="false" />
            </LogoWrapper>
            <InfoSection>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </InfoSection>
            <DateSection>{item.date}</DateSection>
          </AchievementItem>
        ))}
      </AchievementCard>
    </Container>
  )
}

export default Achievement;