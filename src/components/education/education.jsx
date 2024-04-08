import React from 'react'
import './education.css';
import dojo from '../../assets/dojo.svg';
import bzu from '../../assets/bzu.png';
import aaup from '../../assets/aaup.png';
import openCv from '../../assets/openCv.webp';





const Education = () => {
  return (
    <section id='portfolio'>
      <h5>What I learned?</h5>
      <h2>Education</h2>
      <div className='container portfolio-container'>

<article className='edu-item'>
  <h3>Arab American University</h3>
  <h4>West Bank - Palestine</h4>
  <div className='portfolio-item-image'>
    <img src={aaup} alt='aaup' />
  </div>
  <h2>Bachelor</h2>
  <h2 className='Major'>Computer Systems Engineering</h2>
  <h4>2018 - 2022</h4>
</article>

<article className='edu-item'>
  <h3>Birzeit University</h3>
  <h4>West Bank - Palestine</h4>
  <div className='portfolio-item-image'>
    <img src={bzu} alt='bzu' />
  </div>
  <h2>Master</h2>
  <h2 className='Major'>Computer Engineering</h2>
  <h4>2022 - 2024</h4>
</article>

<article className='edu-item'>
  <h3>Coding Dojo</h3>
  <h4>Part of Colorado University - USA</h4>
  <div className='portfolio-item-image'>
    <img src={dojo} alt='dojo' />
  </div>
  <h2>Online Courses </h2>
  <h2 className='Major'>Data Science, Machine Learning, and FullStack bootcamps</h2>
  <h4>2022 - 2024</h4>
</article>

<article className='edu-item'>
  <h3>Open CV University</h3>
  <h4>California - USA</h4>
  <div className='portfolio-item-image'>
    <img src={openCv} alt='openCv' />
  </div>
  <h2>Online Courses </h2>
  <h2 className='Major'>Deep Learning and Computer vision bootcamp</h2>
  <h4>2024</h4>
</article>

</div>
    </section>
  )
}

export default Education;