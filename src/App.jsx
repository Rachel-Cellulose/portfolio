import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import "boxicons/css/boxicons.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="main_wrapper">
      <Navbar />
      <section>
        <Home />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Portfolio />
      </section>

      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
