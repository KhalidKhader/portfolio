import React from 'react'
import './portfolio.css';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import IMG16 from '../../assets/16.png';
import IMG17 from '../../assets/17.png';
import IMG18 from '../../assets/18.png';


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>

        <article className='portfolio-item'>
          <h3>My First React App</h3>
          <div className='portfolio-item-image'>
            <img src={IMG16} alt='' />
          </div>
          <div className="portfolio__item-cta">
          <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_react-activity-6968876289214562305-ye26?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
          <a href='https://github.com/KhalidKhader' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
          </div>
        </article>

        <article className='portfolio-item'>
          <h3>Smart Advising System</h3>
          <div className='portfolio-item-image'>
            <img src={IMG17} alt='' />
          </div>
          <div className="portfolio__item-cta">
          <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_finally-this-is-smart-advising-system-activity-6953444289213304833-BJs6?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
          <a href='https://github.com/KhalidKhader' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
          </div>
        </article>

        <article className='portfolio-item'>
          <h3>Palestinian Civil Defense</h3>
          <div className='portfolio-item-image'>
            <img src={IMG18} alt='' />
          </div>
          <div className="portfolio__item-cta">
          <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_this-is-a-voluntary-project-submitted-to-activity-6935975946151763968-Db2F?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
          <a href='https://github.com/KhalidKhader' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
          </div>
        </article>

        

      </div>
    </section>
  )
}

export default Portfolio