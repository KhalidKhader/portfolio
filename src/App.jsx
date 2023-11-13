import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Education from './components/education/education';
import Calendly from './components/Calendly/Calendly';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <Education/>
    <Skills/>
    <Contact/>
    <Calendly link={'khalidalkhader'} type={'Personal meeting'}/>
    <Calendly link={'khalid-khader'} type={'during work hours in AXSOS Academy'}/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Testimonials/>
   </>
  )
}

export default App