import React from "react";
import "./Portfolio.scss";
import Frame1 from "../../images/Frame1.png"
import Frame2 from "../../images/Frame2.png"
import Frame3 from "../../images/Frame3.png";
import Frame4 from "../../images/Frame4.png";
import Frame5 from "../../images/Frame5.png"
import Frame6 from "../../images/Frame6.png";




const Portfolio = () => {
  return (
    <div>
      <section className="portfolio">
        <div className="portfolio_wrapper">
          <h3>Portfolio.</h3>

          <div className="port-container">
            <div className="box">
              <div className="inner-box">
                <img src={Frame1} alt="" className="image" />
              </div>
              <h3>Blog</h3>
              <p>Writing</p>
            </div>

            <div className="box">
              <div className="inner-box">
                <img src={Frame6} alt="" className="image" />
              </div>
              <h3>URL shortener</h3>
              <p>Internship</p>
            </div>

            <div className="box">
              <div className="inner-box">
                <img src={Frame3} alt="" className="image" />
              </div>
              <h3>Health Tracking</h3>
              <p>Health</p>
            </div>

            <div className="box">
              <div className="inner-box">
                <img src={Frame5} alt="" className="image" />
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
