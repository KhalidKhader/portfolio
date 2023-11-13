import React from 'react';
import './experience.css';
import Report from '../../assets/MyInternshipreport.docx'


const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Experience I have ?</h5>
    <h2>My Experience</h2>
    <div className='container experience__container'>

      <div >
        <h2>Exalt Technologies </h2>
        <br/>
        <p>
        On July 24, 2022 I started in frontend development, I started reviewing Html, CSS and JavaScript and I created a simple application using them on July 28, 2022. I also learned about firebase database, git, GitHub, AJAX, jQuery, some code convention and regex for validation.
        </p>
        <p>
        I started between July 31, 2022 and August 18, learning Maximilian Schwarzmüller tutorial course on react, I created many applications during the course and I learned JSX, React State, React Events, Reducers, JSON web token, Hooks, React Styling, Fragments, Portals, Http Requests, Connecting Database, React Router, Multi-Page SPA, Deploying React Apps, Authentication, React Forms, Context API, Rest API, and some APIs.
        </p>
        <p>
        Between Aug 18, 2022 - Sep 1, 2022 I've developed my previous Html, CSS, and JavaScript project I created using React which looked more professional. I have also created several applications such as movies app, food menu app, login app, and other apps.
        </p>
        <p>
        There were also weekly meetings for two hours. We did several activities and got to know many of the trainers. We learned Git, Maven, Jenkins, Code Conventions, Regex, Introduction to Design and Verification, VLSI Manufacturing, DevOps, Design Patterns and Frontend Technologies. 
        </p>
        



      </div>

      <div >
        <h2>Smart Advising System</h2>
        <p>
        Our System Created in APEX ORACLE, Using Artificial Intelligence Techniques. Our System aims to guide our CSE students of all student's educational levels. It will show the courses on the student's plan and the description of all courses. Every course must have content (at least the pdf book), and many files that may help the students to study. This System will include some information about educational clubs in the CSE department or other association like IVR and IEEE and other events in the college like engineering day. It's a solution for students who visit the dean or department chairman every semester to have some guidance about what to register.
        </p>
        <p>
        Our System aims to guide and advise CSE students of all educational levels. This system will be created as a website system that all of our students can access at any time for knowledge sharing and academic registration advising. The system is proposed to have many features and solutions for many problems stuck in students’ life.
          </p>
          
        <div className="cta">
        <a href={Report} download class='btn'>Download My Internship Report </a>
        <a href='https://apex.oracle.com/pls/apex/r/aaup/smart-advising-system/home?session=14967676746998' target='_blank' class='btn btn-primary'>Smart Advising System</a>
      </div>

      </div>

    </div>
    </section>
  );
}

export default Experience;
