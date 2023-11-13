import React from "react";
import "./skills.css";
import { ImHtmlFive } from "react-icons/im";
import {
  AiFillCheckCircle,
  AiOutlineConsoleSql,
  AiOutlinePartition,
} from "react-icons/ai";
import {
  SiJavascript,
  SiCss3,
  SiJava,
  SiMysql,
  SiCisco,
  SiOracle,
  SiJquery,
  SiFirebase,
  SiSpringboot,
  SiFlask,
  SiDjango,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiTensorflow,
  SiKeras,
  SiTableau,
  SiPython,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiOpencv,
  SiDocker,
  SiMacos,
  SiPostman,
  SiGooglecolab,
  SiJupyter,
  SiWebpack,
  SiAzuredevops,
  
} from "react-icons/si";
import { FaPython, FaReact, FaLinux, FaAngular } from "react-icons/fa";
import { GiComputing, GiCircuitry, GiAutoRepair } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { VscRegex,VscGraph } from "react-icons/vsc";


const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have ?</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__programming">
          <h2>Programming <GiComputing /> </h2>
          <br />

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Python <FaPython />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Advanced
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                JAVA <SiJava />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Javascript <SiJavascript />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                C++ <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                C <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                HTML <ImHtmlFive />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                CSS <SiCss3 />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                XML <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                {" "}
                PL/SQL <AiOutlineConsoleSql />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>
          <div className="experience__content">
            <article className="experience__details">
              <h4>
                {" "}
                Assembly <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                {" "}
                C# <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                PHP <SiPhp />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                MATLAB <AiOutlinePartition />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Verilog <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                System Verilog <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Vhdl <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>
        </div>

        <div className="experience__others">
          <h2>Data Science and Machine Learning <SiPython/></h2>
          <br></br>
          <div className="experience__content">
            <article className="experience__details">
              <h4>
                NumPy <SiNumpy />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Pandas <SiPandas />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                MatPlotlib <SiPlotly />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Seaborn <VscGraph />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Scikit-Learn <VscGraph />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                XGBOOST <VscGraph />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                LightGBM <VscGraph />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Keras <SiKeras />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Tensorflow <SiTensorflow />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                PyTorch <SiPython />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Tableau <SiTableau />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Open CV <SiOpencv />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>
        </div>
      </div>
<br></br>
      <div className="container experience__container">
        <div className="experience__others">
          <h2>Web development <SiWebpack/></h2>
          <br></br>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Flask <SiFlask />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Django <SiDjango />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                React JS <FaReact />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Angular <FaAngular />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner{" "}
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Node JS <SiJavascript />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner{" "}
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Express JS <SiJavascript />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner{" "}
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                JAVA Spring Boot <SiSpringboot />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                PHP Laravel <SiLaravel />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Oracle APEX <SiOracle />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Asp.net <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Asp.net core <GiComputing />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Oracle SQL <AiOutlineConsoleSql />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Advanced
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                {" "}
                MySQL <SiMysql />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Advanced
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                {" "}
                POSTGRESQL <SiPostgresql />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Firebase <SiFirebase />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner{" "}
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                {" "}
                MONGO DB <SiMongodb />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                SQLite <SiSqlite />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner{" "}
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                jQuery <SiJquery />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                AJAX <ImHtmlFive />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Regex Validation <VscRegex />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>
        </div>

        <div className="experience__programming">
          <h2>Other Tools <SiAzuredevops/> </h2>
          <br />

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                GitHub <BsGithub />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                git <BsGithub />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Docker <SiDocker />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                POSTMAN <SiPostman />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Advanced
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Colab <SiGooglecolab />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Advanced
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Jupyter <SiJupyter />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Advanced
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Cisco Packet Tracer <SiCisco />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Networking <SiCisco />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Beginner
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Maltisim <GiCircuitry />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                AutoCAD <GiAutoRepair />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Mac OS <SiMacos />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>

          <div className="experience__content">
            <article className="experience__details">
              <h4>
                Linux <FaLinux />
              </h4>
              <small className="text-light">
                <AiFillCheckCircle /> Intermediate
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
