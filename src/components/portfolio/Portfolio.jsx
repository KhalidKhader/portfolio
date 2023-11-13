import React from 'react'
import './portfolio.css';
import {BsGithub, BsLinkedin} from 'react-icons/bs';
import IMG16 from '../../assets/16.png';
import IMG17 from '../../assets/17.png';
import IMG18 from '../../assets/18.png';
import BTMD from '../../assets/BrainTumorsDet.jpeg';
import LegClc from '../../assets/legclc.jpg';
import TvApp from '../../assets/TV.webp';
import CRUD from '../../assets/crud.png';



const Portfolio = () => {
  return (
    <section id='services'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio-container'>

<article className='portfolio-item'>
  <h3>Brain Tumors Detection</h3>
  <div className='portfolio-item-image'>
    <img src={BTMD} alt='' />
  </div>
  <div className="portfolio__item-cta">
  <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_after-a-long-and-tiring-day-i-achieved-great-activity-7069022676014538752-a1om?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
  <a href='https://github.com/KhalidKhader/BrainTumorsDetection' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
  </div>
</article>

<article className='portfolio-item'>
  <h3>Legal Clinic (worked Partially as a member)</h3>
  <div className='portfolio-item-image'>
    <img src={LegClc} alt='' />
  </div>
  <div className="portfolio__item-cta">
  <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_during-the-participation-as-a-visitor-to-activity-7066733698838147072-0VbM?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
  <a href='https://github.com/KhalidKhader' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
  </div>
</article>

<article className='portfolio-item'>
  <h3>Django TV Shows App</h3>
  <div className='portfolio-item-image'>
    <img src={TvApp} alt='' />
  </div>
  <div className="portfolio__item-cta">
  <a href='https://www.linkedin.com/' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
  <a href='https://github.com/KhalidKhader/Djanggo_TVShows' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
  </div>
</article>

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

        <article className='portfolio-item'>
  <h3>Django With React Full CRUD APP</h3>
  <div className='portfolio-item-image'>
    <img src={CRUD} alt='' />
  </div>
  <div className="portfolio__item-cta">
  <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_the-same-crud-app-but-using-python-django-activity-7072222093282557952-Y1wV?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
  <a href='https://github.com/KhalidKhader/pyDjangoWithReact' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
  </div>
</article>

<article className='portfolio-item'>
  <h3>Angular 15.0 with ASP.NET 7.0 CRUD APP</h3>
  <div className='portfolio-item-image'>
    <img src={CRUD} alt='' />
  </div>
  <div className="portfolio__item-cta">
  <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_last-week-i-created-my-first-crud-application-activity-7072139973851815936-Wfw9?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
  <a href='https://github.com/KhalidKhader/AngularCRUD' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
  </div>
</article>

<article className='portfolio-item'>
  <h3>React with JAVA Spring CRUD APP</h3>
  <div className='portfolio-item-image'>
    <img src={CRUD} alt='' />
  </div>
  <div className="portfolio__item-cta">
  <a href='https://www.linkedin.com/posts/khalid-khader-3a8b43121_this-is-a-voluntary-project-submitted-to-activity-6935975946151763968-Db2F?utm_source=share&utm_medium=member_desktop' class='btn' target='_blank'>Linkedin <BsLinkedin/></a>
  <a href='https://github.com/KhalidKhader/JavaSpringReactJS' class='btn btn-primary' target='_blank'>Github <BsGithub/></a>
  </div>
</article>



</div>
    </section>
  )
}

export default Portfolio