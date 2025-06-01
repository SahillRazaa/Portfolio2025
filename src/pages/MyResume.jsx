import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ResumeViewer from '../components/ResumeViewer'

const Container = styled.div`
  background-color: #f1f5f9;
  position: relative;
  overflow: hidden;
  width: 98.9vw;
`

const MyResume = () => {
  return (
    <Container>
      <Navbar />
      <ResumeViewer/>
      <Footer/>
    </Container>
  )
}

export default MyResume
