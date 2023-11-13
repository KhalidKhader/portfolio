import React from 'react';
import CV from '../../assets/Khalid CV.pdf';
const CTA = () => {
  return (
    <div>
      <div className="ctacomp">
       <a href='#calendly' class='btn btn-primary'>Book a meeting</a>
        <a href={CV} download class='btn'>Download CV</a>
        <a href='#contact' class='btn btn-primary'>Contact Me</a>
        

      </div>
    </div>
  );
}

export default CTA;
