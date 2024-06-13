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
              {/* <p>
                I have a solid background in frontend development, gained
                through my studies and hands-on experience.
              </p> */}
              <p>
                My journey started at Zuri where i enrolled for a data-analytic
                course using excel and powerBI.
              </p>
              <p>
                During my time at ALX_AFRICA, I further developed my ability to
                build and maintain complex frontend projects.{" "}
              </p>
              

              <p>
                And lastly at AltSchool Africa where I had the opportunity to
                work on diverse projects that tested and expanded my technical
                capabilities.
              </p>
            </div>
          </div>

          <div className="skills_container">
            <div className="skills_main">
              <div className="text">
                <p>Mar 2023- April 2024</p>
                <div>
                  Alt_School
                  <br /> Frontend Development
                </div>
              </div>
              <div className="text">
                <p>June 2022- Oct 2023</p>
                <div>
                  ALX_AFRICA
                  <br /> Frontend Development
                </div>
              </div>
              <div className="text">
                <p>May 2022 - Aug 2022</p>
                <div>
                  Zuri Team <br /> Frontend Development
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stack">
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
        </div>
      </section>
    </div>
  );
};

export default Skills;
