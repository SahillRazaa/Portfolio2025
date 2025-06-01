import React from 'react'
import Hero from '../components/Hero'
import styled from 'styled-components'
import Myself from '../components/Myself'
import ProjectGlimps from '../components/ProjectGlimps'
import TechStacks from '../components/TechStacks'
import Footer from '../components/Footer'
import Experience from '../components/Experience'
import Testimony from '../components/Testimony'
import Contact from '../components/Contact'
import Achievement from '../components/Achievement'
import Navbar from '../components/Navbar'

const Container = styled.div`
  background-color: #f1f5f9;
  transition: all 0.3 ease;
  position: relative;
  overflow: hidden;
  width: 98.9vw;
`

const Home = () => {
  return (
    <Container>
      <Navbar/>
      <Hero />
      <Myself/>
      <ProjectGlimps/>
      <TechStacks/>
      <Experience/>
      <Achievement/>
      {/* <Testimony/> */}
      <Contact/>
      <Footer/>
    </Container>
  )
}

export default Home
