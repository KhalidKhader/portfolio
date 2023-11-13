import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <Skills/>
    <Contact/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Testimonials/>
   </>
  )
}

export default App