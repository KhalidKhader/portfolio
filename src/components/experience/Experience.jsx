import React from "react";
import "./experience.css";
import Report from "../../assets/MyInternshipreport.docx";
import tap from "../../assets/tap.jpeg";
import axsos from "../../assets/axsos.png";
import knowledge from "../../assets/knowledge.png";
import manara from "../../assets/manara.png";
import exalt from "../../assets/exalt.png";
import aaup from "../../assets/aaup.png";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Experience I have ?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div>
          <h2>AXSOS ACADEMY GMBH</h2>

          <h3>DATA SCIENCE AND MACHINE LEARNNG ENGINEER/TA</h3>
          <small>AUG 2023 – PRESENT</small>
          <p>
            Start working on data science and machine learning with basic
            knowledge of NumPy, Pandas, MatPlotlib, Seaborn, Folium, scikit
            learn, XGBOOST, LightGBM, Keras, Tensorflow, SHAP, LIMA, Stats
            Model, Tableau Work on Brain Tumors Detection using open CV and
            Tensorflow with Keras and PyTorch and working in Advanced Machine
            learning using some Deep learning ANN like CNN and RNN. 
          </p>
          <img src={axsos} alt="axsos"  />
        </div>
        <div>
          <h2>AXSOS ACADEMY GMBH</h2>

          <h3>FULLSTACK DEVELOPER/TEACHING ASSISTANT</h3>
          <small>NOV 2022 – PRESENT</small>
          <p>
            Full Stack Teaching Assistant. Assisting students with problem
            solving, different stacks, code review. Certified in Coding Dojo in
            MERN, Python (Django and Flask) stacks, and Java Spring boot stack.
            I worked a bit on development of the ALGOS LABS project for AXSOS
            Academy with a team of specialists in React TS, JAVA SPRING, Mongo,
            and Postgres database, and working on AI Sessions with some basic AI
            Apps.
          </p>
          <img src={axsos} alt="axsos" />
        </div>
        <div>
          <h2>Exalt Technologies </h2>

          <h3>FRONTEND DEVELOPMENT</h3>
          <small>JULY 2022 – SEP 2022</small>
          <p>
            Html, CSS and JavaScript, firebase database, git, GitHub, AJAX,
            jQuery regex for validation and React JS, and create many
            applications with JSX, React State, React Events, Reducers, JSON web
            token, Hooks, React Styling, Fragments, Portals, Http Requests,
            Connecting Database, React Router, Single-Page Applications SPA,
            Deploying React Apps, Authentication, React Forms, Context API, Rest
            API, and some APIs.
          </p>
          <h3>INTERN DESIGN AND VERIFICATION</h3>
          <p>
            Learned some basic concepts about Verilog programming language and
            System Verilog.
          </p>
          <img src={exalt} alt="exalt" />
<div className="bf">
<a href={Report} download class="btn-primary btn">
            Download My Internship Report{" "}
          </a>
</div>
        </div>

        <div>
          <h2>SMART ADVISING SYSTEM</h2>

          <h3>ARAB AMERICAN UNIVERSITY</h3>
          <small>SEP 2021 - JULY 2022</small>
          <p>
            Our System Created in APEX ORACLE, Using Artificial Intelligence
            Techniques. Our System aims to guide our CSE students of all
            student's educational levels. It will show the courses on the
            student's plan and the description of all courses.
          </p>
          <img src={aaup} alt="aaup" />
          
         <div className="lnkin">
         <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6953434291766743041" height="350" width="100%" frameborder="0" allowfullscreen="0" title="Embedded post"></iframe>
          </div>
<div className="bf">
<a
              href="https://apex.oracle.com/pls/apex/r/aaup/smart-advising-system/home?session=14967676746998"
              target="_blank"
              class="btn-primary btn"
            >
              Smart Advising System
            </a>
</div>
        </div>
        
        <div>
          <h2>TAP</h2>

          <h3>PROFESSIONAL MENTOR</h3>
          <small>OCT 2023 – PRESENT</small>
          <p>
            Start as a Part Time professional mentor in Software development
            program, leading sessions about Artificial Intellgence, Machine
            Learning, Data Science, Deep Learning, Computer vision.
          </p>
          <img src={tap} alt="tap" />
        </div>
        <div>
          <h2>MANARAH</h2>

          <h3>PROFESSIONAL MENTOR</h3>
          <small>NOV 2023 – PRESENT</small>
          <p>
            Start as a Part Time professional mentor in Software development
            program, leading sessions about Artificial Intellgence, Machine
            Learning, Data Science, Deep Learning, Computer vision.
          </p>
          <img src={manara} alt="manara" />
        </div>

        <div>
          <h2>KNOWLEDGE ACADEMY</h2>

          <h3>PROFESSIONAL MENTOR</h3>
          <small>OCT 2023 – PRESENT</small>
          <p>
            Start as a Part Time professional mentor in Software development
            program, leading sessions about Artificial Intellgence, Machine
            Learning, Data Science, Deep Learning, Computer vision.
          </p>
          <img src={knowledge} alt="knowledge" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
