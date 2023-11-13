import React from "react";
import "./testimonials.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import IMG1 from "../../assets/img1.JPG";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.JPG";
import IMG4 from "../../assets/img4.jpg";
import IMG5 from "../../assets/img5.jpg";
import IMG6 from "../../assets/img6.jpg";
import IMG7 from "../../assets/img7.jpg";
import IMG8 from "../../assets/img8.jpg";
import IMG9 from "../../assets/img9.jpg";
import IMG10 from "../../assets/img10.JPG";
import IMG11 from "../../assets/img11.jpg";
import IMG12 from "../../assets/img12.JPG";
import IMG13 from "../../assets/img13.jpg";
import IMG14 from "../../assets/img14.jpg";
import IMG15 from "../../assets/img15.jpg";
const Testimonials = () => {
  return (
    <section id="myPhotos">
      <article className="myPhotos">
        <div>
          <div className="myPhotos__item">
            <img src={IMG1} alt="khalid" />
          </div>
          <h5 className="place">Exalt Technologies</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG2} alt="khalid" />
          </div>
          <h5 className="place">Faculty of Engineering AAUP </h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG3} alt="khalid" />
          </div>
          <h5 className="place">Eid AlAdha 2018</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG4} alt="khalid" />
          </div>
          <h5 className="place">My Senior Project 1</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG5} alt="khalid" />
          </div>
          <h5 className="place">Me 2018</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG6} alt="khalid" />
          </div>
          <h5 className="place">Me 2016</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG7} alt="khalid" />
          </div>
          <h5 className="place">AAUP President Office 2018</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG8} alt="khalid" />
          </div>
          <h5 className="place">Me 2015</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG9} alt="khalid" />
          </div>
          <h5 className="place">Me Betlehem 2019</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG10} alt="khalid" />
          </div>
          <h5 className="place">Me 2020</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG11} alt="khalid" />
          </div>
          <h5 className="place">Rawabi 2018</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG12} alt="khalid" />
          </div>
          <h5 className="place">Me 2020</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG13} alt="khalid" />
          </div>
          <h5 className="place">Rawabi 2020</h5>
        </div>

        <div>
          <div className="myPhotos__item">
            <img src={IMG14} alt="khalid" />
          </div>
          <h5 className="place">Me 2020</h5>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
