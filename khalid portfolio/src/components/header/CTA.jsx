import React from 'react';
import CV from '../../assets/Khalid-Khader-CV.pdf';
const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} download class='btn'>Download CV</a>
        <a href='#contact' class='btn btn-primary'>Contact Me</a>
      </div>
    </div>
  );
}

export default CTA;
