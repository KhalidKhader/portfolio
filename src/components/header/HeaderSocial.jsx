import React from 'react'
import{BsLinkedin} from 'react-icons/bs';
 import{BsGithub} from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className="header-socials">
       <a href='https://www.linkedin.com/in/khalid-khader-3a8b43121' target='_blank'><BsLinkedin/></a>
       <a href='https://github.com/KhalidKhader' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial;
