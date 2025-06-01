import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ReactImage from '../assets/react.png';
import NodeImage from '../assets/node.png';
import MongoDbImage from '../assets/mongodb.png';

const testimonies = [
  {
    avatar: ReactImage,
    name: "Emma Watson",
    role: "CEO, BrightIdeas",
    text: "Working with Sahil was an absolute pleasure. His attention to detail and creativity elevated our entire project.",
  },
  {
    avatar: NodeImage,
    name: "Liam Smith",
    role: "Lead Engineer, DevWorks",
    text: "His coding standards and team collaboration are top-notch. Sahil’s problem-solving mindset is invaluable.",
  },
  {
    avatar: MongoDbImage,
    name: "Sophia Johnson",
    role: "UX Designer, FlowStudio",
    text: "Sahil brings vision and precision. His designs are not just functional but truly delightful to use.",
  },
];

const Container = styled(motion.section)`
  padding: 0rem 10vw;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #0a2540;
  margin: 0 0 3rem 0;
  text-align: center;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0%;
    width: 4rem;
    height: 4px;
    background: #0467d5;
    border-radius: 2px;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const BubbleCard = styled(motion.div)`
  background: #fff;
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50px;
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-top-color: #fff;
    z-index: 1;
  }
`;

const Avatar = styled(motion.img)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Text = styled(motion.p)`
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '\\201C';
    position: absolute;
    left: 0;
    top: -5px;
    font-size: 3rem;
    color: #0467d5;
    opacity: 0.2;
    line-height: 1;
  }
`;

const Footer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const NameRole = styled(motion.div)`
  text-align: left;

  h4 {
    font-size: 1rem;
    margin: 0;
    color: #0a2540;
    font-weight: 600;
  }

  p {
    font-size: 0.85rem;
    color: #7a7a7a;
    margin: 0;
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

const titleVariants = {
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

const bubbleCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'backOut',
    },
  }),
}

const Testimony = () => {
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
      id='testimonials'
    >
      <Title variants={titleVariants}>Testimonials</Title>
      <Grid variants={containerVariants}>
        {testimonies.map((item, idx) => (
          <BubbleCard
            key={idx}
            variants={bubbleCardVariants}
            custom={idx}
          >
            <Avatar src={item.avatar} alt={item.name} />
            <Text>{item.text}</Text>
            <Footer>
              <NameRole>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </NameRole>
            </Footer>
          </BubbleCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimony;