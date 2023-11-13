import React from 'react';
import './about.css';
import {FaAward} from 'react-icons/fa';
import {MdOutlineCastForEducation} from 'react-icons/md';
import {GoProject} from 'react-icons/go';
import {MdOutlineVerifiedUser} from 'react-icons/md';
import Rawabi from '../../assets/rawabi.JPG';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <img src={Rawabi} alt='Rawabi'/>
          </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <h6>+2 Year Experience</h6>
            <small>+1 Year Web dev Experience</small>
            <br></br>
            <small>+1 AI and ML Experience</small>
            </article>

            <article className='about__card'>
              <MdOutlineCastForEducation className='about__icon'/>
            <h5>Education</h5>
            <small>BSc. Computer Systems Engineering</small>
            <br></br>
            <small>studying MSc. Computer Engineering</small>
            </article>

            <article className='about__card'>
              <GoProject className='about__icon'/>
            <h5>Projects</h5>
            <small>+5 Completed</small>
            <h6>start working in projects in ML and Data science, especially in Healthcare systems domain</h6>
            </article>
            
            <article className='about__card'>
              <MdOutlineVerifiedUser className='about__icon'/>
            <h5>Next Plan</h5>
            <small>Study PhD. in Machine Learning and get more real experience</small>
            </article>

          </div>
            <p>
            I am Khalid, I was born in Ramallah in 2000. I specialized in computer systems engineering at the Arab American University, and I completed my major in record time, 4 years instead of 5 years, and now I hope to study artificial intelligence in the next academic year 2022/2023, I like to develop myself and my skills then learn new things. The beginning of the path is a step, but I am now, although I am nearing to the end, but I want to develop until I have reached the highest capabilities. I am currently excellent as a hardware and software student, and I am working on developing myself in the software now. I have completed many courses in order to be a follower of technology, and I am still training and learning from the courses and continue to do more.
            </p>
            <a href='#contact' class='btn btn-primary'>Contact Me</a>

          </div>

        </div>
    
    </section>
  );
}

export default About;
