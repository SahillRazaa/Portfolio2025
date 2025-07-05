import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import '@react-pdf-viewer/core/lib/styles/index.css';

const MyResume = '/assets/Sahil_Raza_Ansari_Resume.pdf';

const ResumeSection = styled(motion.div)`
  padding: 0 10vw;
  padding-bottom: 2rem;
`;

const ResumeHeader = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

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

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 550px) {
    font-size: 1.4rem;
  }

  @media (max-width: 370px) {
    font-size: 1.2rem;
  }
`;

const DownloadButton = styled(motion.a)`
  background-color: #0467d5;
  color: white;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background-color: #0a2540;
    transform: translateY(-2px);
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 370px) {
    font-size: 0.6rem;
    padding: 0.6rem 1.3rem;
  }
`;

const PDFContainer = styled(motion.div)`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.57);
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

const ResumeViewer = () => {
  const getFilePluginInstance = getFilePlugin();
  const toolbarPluginInstance = toolbarPlugin();

  return (
    <ResumeSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ResumeHeader variants={childVariants}>
        <SectionTitle variants={childVariants}>My Resume</SectionTitle>
        <DownloadButton
          variants={childVariants}
          href={MyResume}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download
        </DownloadButton>
      </ResumeHeader>
      <PDFContainer variants={childVariants}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <Viewer
            fileUrl={MyResume}
            plugins={[toolbarPluginInstance, getFilePluginInstance]}
            theme="light"
          />
        </Worker>
      </PDFContainer>
    </ResumeSection>
  );
};

export default ResumeViewer;