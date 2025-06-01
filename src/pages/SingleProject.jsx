import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DetailedProject from '../components/DetailedProject';

const Container = styled.div`
  background-color: #f1f5f9;
  position: relative;
  overflow: hidden;
  width: 98.9vw;
`;

const SingleProject = () => {
  const { id } = useParams();

  return (
    <Container>
      <Navbar />
      <DetailedProject projectId={id} />
      <Footer />
    </Container>
  );
};

export default SingleProject;
