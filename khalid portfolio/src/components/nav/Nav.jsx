import React from 'react'
import './nav.css';
import {HiOutlineHome} from 'react-icons/hi';
import {FcAbout} from 'react-icons/fc';
import {GiMaterialsScience} from 'react-icons/gi';
import {MdMiscellaneousServices} from 'react-icons/md';
import{AiFillMessage} from 'react-icons/ai';
import { useState } from 'react'; 
const Nav = () => {
  const [activeNav, setActiveNav]=useState('#');
  return (
    <nav>
      <a href='#' className={activeNav==='#' ? 'active' : ''}><HiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}><FcAbout/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}><GiMaterialsScience/></a>
      <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav
