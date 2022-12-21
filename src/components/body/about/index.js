import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
import codingImage from '../../../assets/coding.png';

// import('../images/foo.png').then(({ default: fooPath }) => {
//   // use fooPath there
// });

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Enchanté,
          <br /> <span className="info-name">Victor Philippe</span>.
          <br /> Développeur Web Freelance
        </div>
        <div className="about-photo">
          <img
            // src={require("../../../assets/coding.png").default}
            src={codingImage}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;