import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Education from './components/education/education';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import MedApp from './components/medApp/MedApp';
import BrainTumors from './components/BrainTumors/BrainTumors';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Calendly from './components/Calendly/Calendly';
import Footer from './components/footer/Footer';
// import Chat from './components/chatbot/Chat';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        {/* Top section */}
        <Header />
        <Nav />
        
        {/* About & Background */}
        <About />
        <Education />
        
        {/* Skills & Experience */}
        <Skills />
        <Experience />
        
        {/* Projects */}
        <Portfolio />
        <MedApp />
        <BrainTumors />
        
        {/* Testimonials */}
        {/* <Testimonials /> */}
        
        {/* Contact */}
        <Contact />
        <Calendly link={'khalidalkhader'} type={'Personal meeting'} />
        
        {/* Footer */}
        <Footer />
        
        {/* <Chat /> */}
      </>
    </ThemeProvider>
  )
}

export default App
