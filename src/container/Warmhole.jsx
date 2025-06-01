import React from 'react';
import styled, { keyframes } from 'styled-components';

const NUM_STARS = 1000;

const Warmhole = () => {
  return (
    <Space>
      {[...Array(NUM_STARS)].map((_, i) => (
        <Star key={i} style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          width: `${Math.random() * 2 + 0.5}px`,
          height: `${Math.random() * 2 + 0.5}px`,
        }} />
      ))}
      <CloudGlow />
      <CloudRing />
      <BlackCore />
      <SpaceCaption1>Sometimes I code</SpaceCaption1>
      <SpaceCaption2>Sometimes I casually swirl into a black hole.</SpaceCaption2>
      <SpaceCaption3>Balance, right?</SpaceCaption3>
    </Space>
  );
};

export default Warmhole;

const swirl = keyframes`
  0% {
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg);
  }
`;


const glowPulse = keyframes`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.2; }
`;

const boxShadowPulse = keyframes`
  0% {
    box-shadow: 0 0 80px 10px rgba(255, 255, 255, 0.2), 
                0 0 120px 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 150px 20px rgba(255, 255, 255, 0.4), 
                0 0 200px 40px rgba(255, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 80px 10px rgba(255, 255, 255, 0.2), 
                0 0 120px 20px rgba(255, 255, 255, 0.1);
  }
`;


const Space = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #000 40%, #050505 70%, #0a0a0a 100%);
  overflow: hidden;
`;

const BlackCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 250px;
  background: black;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  animation: ${boxShadowPulse} 6s ease-in-out infinite;
`;

const CloudRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 200px;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(200, 200, 200, 0.3) 50%,
    transparent 80%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%) rotateX(75deg);
  z-index: 2;
  filter: blur(4px);
  animation: ${swirl} 10s linear infinite;
`;


const CloudGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 30%, transparent 70%);
  transform: translate(-50%, -50%);
  z-index: 10;
  filter: blur(20px);
  animation: ${glowPulse} 5s ease-in-out infinite;
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: ${twinkle} 2s infinite ease-in-out;
  z-index: 0;
`;

const SpaceCaption1 = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: #ccc;
  font-size: 1.1rem;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  animation: ${glowPulse} 4s ease-in-out infinite;
  z-index: 10;
  white-space: nowrap;
`;

const SpaceCaption2 = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: #ccc;
  font-size: 0.8rem;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  animation: ${glowPulse} 4s ease-in-out infinite;
  z-index: 10;
  white-space: nowrap;
`;

const SpaceCaption3 = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: #ccc;
  font-size: 1.1rem;
  font-family: 'Courier New', Courier, monospace;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  animation: ${glowPulse} 4s ease-in-out infinite;
  z-index: 10;
  white-space: nowrap;
`;
