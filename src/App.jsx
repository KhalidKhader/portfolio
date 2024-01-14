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
import Testimonials from './components/testimonials/Testimonials';
import BrainTumors from './components/BrainTumors/BrainTumors';
const App = () => {
  return (
   <>
    <Header/>
    <Nav/>
    <Education/>
    <Skills/>
    <BrainTumors/>
    <Contact/>
    <Calendly link={'khalidalkhader'} type={'Personal meeting'}/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Testimonials/>
   </>
  )
}

export default App