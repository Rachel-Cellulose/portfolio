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
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              quidem dolorem temporibus neque voluptatem
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              architecto? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quis,
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              inventore consequuntur nemo totam necessitatibus, veniam nisi
              suscipit quam libero fugiat! Eius deleniti dolorem nemo corporis
              excepturi aspernatur, iste ea non!
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
