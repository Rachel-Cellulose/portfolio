import React from "react";
import "./Skills.scss";

import JavascriptIcon from "../../icons/javascript.svg";
import ReactIcon from "../../icons/react.svg";
import VueIcon from "../../icons/vuedotjs.svg";
import GithubIcon from "../../icons/github.svg";
import CssIcon from "../../icons/css3.svg";
import NetlifyIcon from "../../icons/netlify.svg";
import SassIcon from "../../icons/sass.svg";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <div className="skills_wrapper">
          <div className="exp_text">
            <h3>My Experience</h3>
            <div className="skills_text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                facere, illo labore doloribus minima consectetur! facere, illo
                labore doloribus minima consectetur! facere, illo labore
                doloribus minima consectetur!
              </p>
            </div>
          </div>

          <div></div>
          <div className="skills_container">
            <div className="skills_main">
              <div className="text">
                <p>2021-Present</p>
                <div>Frontend Development</div>
              </div>
              <div className="text">
                <p>2021-Present</p>
                <div>Frontend Development</div>
              </div>
              <div className="text">
                <p>2021-Present</p>
                <div>Frontend Development</div>
              </div>
            </div>
          </div>
        </div>

        


        {/* <div className="stack">

          
          <div className="stack-container">
            <div className="stack-content">
              <img src={JavascriptIcon} alt="JavaScript" />
              <img src={ReactIcon} alt="React" />
              <img src={VueIcon} alt="Vue.js" />
              <img src={CssIcon} alt="CSS" />
              <img src={SassIcon} alt="Sass" />
              <img src={GithubIcon} alt="GitHub" />
              <img src={NetlifyIcon} alt="Netlify" />
              <img src={JavascriptIcon} alt="JavaScript" />
              <img src={ReactIcon} alt="React" />
              <img src={VueIcon} alt="Vue.js" />
              <img src={CssIcon} alt="CSS" />
              <img src={SassIcon} alt="Sass" />
              <img src={GithubIcon} alt="GitHub" />
              <img src={NetlifyIcon} alt="Netlify" />
              <img src={JavascriptIcon} alt="JavaScript" />
              <img src={ReactIcon} alt="React" />
              <img src={VueIcon} alt="Vue.js" />
              <img src={CssIcon} alt="CSS" />
              <img src={SassIcon} alt="Sass" />
              <img src={GithubIcon} alt="GitHub" />
              <img src={NetlifyIcon} alt="Netlify" />
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Skills;
