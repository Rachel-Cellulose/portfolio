import React from "react";
import { motion } from "framer-motion";

import "./About.scss";
import background from "../../images/background.png";
const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="about_container">
          <div className="image_container">
            <img src={background} alt="" />
          </div>

          <div className="about_text">
            <h4>A frontend developer based in Lagos, Nigeria</h4>
            <p>
              I am a passionate and dedicated software developer with expertise
              in creating innovative solutions that enhance user experiences.
            </p>

            <p>
              My journey in the tech world has equipped me with a diverse skill
              set, allowing me to tackle complex challenges and deliver
              high-quality projects.
            </p>

            <p>
              Whether collaborating with teams or working independently, I
              thrive on turning ideas into reality through code.
            </p>
            <motion.div className="about_button">
              <a href="#portfolio">
                <button className="btn btn-color"> Check Out My Work</button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
