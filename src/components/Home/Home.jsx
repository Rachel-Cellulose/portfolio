import React from "react";
import { motion } from "framer-motion";
import background from "../../images/background.png";
import TypeEffect from "./TypeEffect";
import linkedin from "../../images/linkedin_logo.png";
import github from "../../images/github_logo.png";
import videobg from "../../videos/5122811-hd_1920_1080_30fps.mp4";

import "./Home.scss";

const linkedInProfile = () => {
  window.open("https://www.linkedin.com/in/rachel-adegboyega/");
};

const gitHubProfile = () => {
  window.open("https://github.com/Rachel-Cellulose");
};

const textVariants = {
  initial: {},
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 2.0,
    },
  },
};

const itemVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <div className="home" id="home" data-aos="fade-up">
      <section>
        <div className="video-container">
          <video
            className="video-bg"
            src={videobg}
            type="video/mp4"
            autoPlay
            loop
            muted
          />

          <div className="overlay">
            <motion.h3
              initial="initial"
              animate="animate"
              variants={textVariants}
            >
              Hello, I'm <br />
            </motion.h3>
            <motion.h1
              initial="initial"
              animate="animate"
              variants={textVariants}
            >
              ADEGBOYEGA SEUNFUNMI <br />
            </motion.h1>
            <h3 id="typed">
              <TypeEffect />
            </h3>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              assumenda, quod cum id laborum sunt animi magni inventore fugiat
              qui.
            </p>

            <motion.div className="social_icon" variants={itemVariants}>
              <motion.img
                src={linkedin}
                alt="LinkedIn"
                onClick={linkedInProfile}
                style={{ cursor: "pointer" }}
              />
              <motion.img
                src={github}
                alt="GitHub"
                onClick={gitHubProfile}
                style={{ cursor: "pointer" }}
              />
            </motion.div>
          </div>
        </div>
        <div className="Home_img">
          <img src={background} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
