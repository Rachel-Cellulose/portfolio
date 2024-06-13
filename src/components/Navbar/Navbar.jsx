import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";

import NavLinks from "../nav_sidebar/navLinks/NavLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.div
          className="name"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h5>RachelSeunfunmi.</h5>
        </motion.div>

        <div className="nav">
          <ul className="nav_items">
            <NavLinks setToggle={setToggle} />
          </ul>
        </div>

        <div className="navbar__menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              className="sidebar_wrapper"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <NavLinks setToggle={setToggle} />
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
