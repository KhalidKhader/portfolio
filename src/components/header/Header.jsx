import React from 'react';
import './header.css';
import ME1 from '../../assets/me2A.png'
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
const Header = () => {
  return (
    <header>
     <div className="container header__container">
      <h3 className="text-light">Hello I'm</h3>
      <h1>Khalid Khader</h1>
      <h3 className="text-light">Computer Systems Engineer</h3>
      <h5>
      I'm Khalid, I'm a computer Engineer. Now I'm a Data Scientist in The National Bank - TNB, I worked as a Data Scientist and Machine Learning Engineer at AXSOS AG, and I worked as a Full-stack Developer/TA, in AXSOS AG, I also trained as a front-end React JS developer at EXALT Technologies, and worked in a project in oracle PL/SQL for one year mainly in AI with Oracle systems and Databases for a web App. and also I deliver many sessions to talk and discuss about AI, Machine Learning, Data Science, Deep Learning, and Computer Vision with many popular academies in Palestine such as AXSOS Academy, and TAP.</h5>
    <HeaderSocial/>
    <div className="me">
      <img src={ME1} alt="me" className='khalid_img' />
     </div>
     <CTA className="cta"/>
    <a href="#contact" className="scroll__down">Scroll Down</a>
 
    </div>
  
    </header>
  );
}

export default Header;
