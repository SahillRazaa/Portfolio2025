import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AllProjects from '../components/AllProjects'

const Container = styled.div`
  background-color: #f1f5f9;
  position: relative;
  overflow: hidden;
  width: 98.9vw;
`

const Project = () => {
  return (
    <Container>
      <Navbar />
      <AllProjects/>
      <Footer/>
    </Container>
  )
}

export default Project
