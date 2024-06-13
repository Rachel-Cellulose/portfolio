import React from "react";
import "./Portfolio.scss";
import Frame1 from "../../images/Frame1.png"
import Frame3 from "../../images/Frame3.png";
import Frame5 from "../../images/Frame5.png"
import Frame6 from "../../images/Frame6.png";

const dataEpic = () => {
  window.open("https://dataepic.netlify.app");
};

const urlShortener = () => {
  window.open("https://portfoliorachel.netlify.app/");
};

const blog = () => {
  window.open("https://portfoliorachel.netlify.app/");
};

const healthTrack = () => {
  window.open("https://portfoliorachel.netlify.app/");
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


const Portfolio = () => {
  return (
    <div>
      <section className="portfolio" id="portfolio">
        <div className="portfolio_wrapper">
          <h3>Portfolio.</h3>

          <div className="port-container">
            <div className="box">
              <div className="inner-box" variants={itemVariants}>
                  <img
                    src={Frame1}
                    alt=""
                    className="image"
                    onClick={blog}
                    style={{ cursor: "pointer" }}
                  />
              </div>
              <h3>Blog</h3>
              <p>Writing</p>
            </div>

            <div className="box">
              <div className="inner-box" variants={itemVariants}>
                <img
                  src={Frame6}
                  alt=""
                  className="image"
                  onClick={urlShortener}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <h3>URL shortener</h3>
              <p>Internship</p>
            </div>

            <div className="box">
              <div className="inner-box" variants={itemVariants}>
                <img
                  src={Frame3}
                  alt=""
                  className="image"
                  onClick={healthTrack}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <h3>Health Tracking</h3>
              <p>Health</p>
            </div>

            <div className="box">
              <div className="inner-box" variants={itemVariants}>
                <img
                  src={Frame5}
                  alt=""
                  className="image"
                  onClick={dataEpic}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <h3>Data Epic</h3>
              <p>Intership</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
