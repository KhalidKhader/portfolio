import React from "react";
import "./experience.css";
import Report from "../../assets/MyInternshipreport.docx";
import tap from "../../assets/tap.jpeg";
import axsos from "../../assets/axsos.png";
import knowledge from "../../assets/knowledge.png";
import manara from "../../assets/manara.png";
import exalt from "../../assets/exalt.png";
import aaup from "../../assets/aaup.png";
import tnb from "../../assets/tnb.png";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Experience I have ?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div>
          <h2>The National Bank TNB</h2>

          <h3>DATA SCIENTIST</h3>
          <small>FEB 2024 – PRESENT</small>
          <p>As a Data Scientist and Machine Learning Engineer in the national  bank, I played a pivotal role in leveraging data to drive informed decision-making and enhance business processes. By developing and implementing advanced machine learning models and algorithms to analyze vast datasets, predict trends, and optimize financial strategies. Collaborating closely with database administrators, you will design and maintain robust data architectures, ensuring seamless integration and accessibility of data for analytical purposes. Also, My expertise in statistical analysis, data mining, and predictive modeling will be crucial in developing risk assessment models, fraud detection algorithms, and customer segmentation strategies. Additionally, I worked collaboratively with cross-functional teams to translate business requirements into scalable and efficient machine learning solutions, contributing to the bank's overall success in navigating the evolving landscape of financial technology and data-driven decision-making.</p>
          <img src={tnb} alt="tnb" />
        </div>
        <div>
          <h2>AXSOS ACADEMY GMBH</h2>

          <h3>DATA SCIENCE AND MACHINE LEARNNG ENGINEER/TA</h3>
          <small>AUG 2023 – FEB 2024</small>
          <p>
            Start working on data science and machine learning with basic
            knowledge of NumPy, Pandas, MatPlotlib, Seaborn, Folium, scikit
            learn, XGBOOST, LightGBM, Keras, Tensorflow, SHAP, LIMA, Stats
            Model, Tableau Work on Brain Tumors Detection using open CV and
            Tensorflow with Keras and PyTorch and working in Advanced Machine
            learning using some Deep learning ANN like CNN and RNN.
          </p>
          <img src={axsos} alt="axsos" />
          <br></br>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7086262245428502528" height="1003" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>        </div>
        <div>
          <h2>AXSOS ACADEMY GMBH</h2>

          <h3>FULLSTACK DEVELOPER/TEACHING ASSISTANT</h3>
          <small>NOV 2022 – FEB 2024</small>
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
          <br></br>
          <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAXSOSAcademy%2Fposts%2Fpfbid037jiHQSF6LRiMzdfFJoWkBr5jcpBRaZdvvAoD1bs8H4GcCTq9SUxEM4QLssMdw5FXl&show_text=true&width=500" width="500" height="759"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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
              rel="noopener noreferrer"
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
          <br></br>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7134841966789316608" height="476" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
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
