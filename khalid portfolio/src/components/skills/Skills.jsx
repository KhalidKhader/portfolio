import React from 'react';
import './skills.css';
import {ImHtmlFive} from 'react-icons/im';
import {AiFillCheckCircle,AiOutlineConsoleSql,AiOutlinePartition} from 'react-icons/ai';
import {SiJavascript,SiCss3,SiJava,SiMysql,SiCisco,SiOracle,SiJquery,SiFirebase} from 'react-icons/si';
import {FaPython,FaReact,FaLinux} from 'react-icons/fa';
import {GiComputing,GiCircuitry,GiAutoRepair} from 'react-icons/gi';
import {BsGithub} from 'react-icons/bs';
import {VscRegex} from 'react-icons/vsc';


const Skills = () => {
  return (
    <section id='skills'>
    <h5>What Skills I have ?</h5>
    <h2>My Skills</h2>
    <div className='container experience__container'>

      <div className='experience__programming'>
        <h2>Programming </h2>
        <br/>
          <div className="experience__content">
            <article className='experience__details'>
              <h4>HTML <ImHtmlFive/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Javascript <SiJavascript/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>CSS <SiCss3/></h4>
              <small className="text-light"><AiFillCheckCircle/> Beginner</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>React JS <FaReact/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Python <FaPython/></h4>
              <small className="text-light"><AiFillCheckCircle/> Advanced</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>JAVA <SiJava/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>C++ <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>C <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Verilog <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>
          
          <div className="experience__content">
            <article className='experience__details'>
              <h4>Vhdl <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Asp.net <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Beginner</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Asp.net core <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Beginner</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>XML <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Beginner</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Oracle SQL <AiOutlineConsoleSql/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4> MySQL <SiMysql/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4> PL/SQL <AiOutlineConsoleSql/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>
          <div className="experience__content">
            <article className='experience__details'>
              <h4> Assembly <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4> C# <GiComputing/></h4>
              <small className="text-light"><AiFillCheckCircle/> Beginner</small>
            </article>
          </div>



      </div>

      <div className='experience__others'>
        <h2>Others</h2>
        <br></br>
          <div className="experience__content">
            <article className='experience__details'>
              <h4>Linux  <FaLinux/></h4>
              <small className="text-light"><AiFillCheckCircle/> Beginner</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Cisco Packet Tracer <SiCisco/></h4>
              <small className="text-light"><AiFillCheckCircle/> Beginner</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>MATLAB <AiOutlinePartition/></h4>
              <small className="text-light"><AiFillCheckCircle/> Advanced</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Maltisim <GiCircuitry/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>AutoCAD <GiAutoRepair/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Oracle APEX <SiOracle/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Regex Validation <VscRegex/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>GitHub <BsGithub/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>git <BsGithub/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>jQuery <SiJquery/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>AJAX <ImHtmlFive/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <h4>Firebase <SiFirebase/></h4>
              <small className="text-light"><AiFillCheckCircle/> Intermediate</small>
            </article>
          </div>

      </div>

    </div>
    </section>
  );
}

export default Skills;
