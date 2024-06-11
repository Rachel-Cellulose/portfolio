// import React from "react";
// import { Link } from "react-scroll";
// import "./Navbar.scss";

// const Navbar = () => {
//   return (
//     <div>
//       <header className="navbar">
//         <a href="#" className="logo">
//           RachelSeunfunmi.
//         </a>
//         <i className="bx bx-menu" id="icon"></i>

//         <nav className="navbar_links">
//           <Link to="home" smooth={true} duration={500}>
//             Home
//           </Link>
//           <Link to="about" smooth={true} duration={500}>
//             About
//           </Link>
//           <Link to="portfolio" smooth={true} duration={500}>
//             Portfolio
//           </Link>
//           <Link to="skills" smooth={true} duration={500}>
//             Skills
//           </Link>
//           <Link to="contact" smooth={true} duration={500}>
//             Contact
//           </Link>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { motion } from "framer-motion";
import './Navbar.scss'
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* <Sidebar /> */}

        <motion.div
          className="name"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h5> RachelSeunfunmi.</h5>
        </motion.div>

        <div className="nav">
          <ul className="nav_items">
            <li className="app__flex">
              <a href="#about">About </a>
            </li>
            <li className="app__flex">
              <a href="#skills"> Skills</a>
            </li>
            <li className="app__flex">
              <a href="#portfolio"> Portfolio</a>
            </li>
            <li className="app__flex">
              <a href="#contact">Contact </a>
            </li>
          </ul>
        </div>

        <div className="navbar__menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />

              <ul>
                <li>
                  <a href="#about" onClick={() => setToggle(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" onClick={() => setToggle(false)}>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#portfolio" onClick={() => setToggle(false)}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setToggle(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;

