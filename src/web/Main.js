import React from "react";
import About from "./about/About";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import { useState } from "react";
import "./style.scss";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="home" className="scroll-to" />
      <Home />
      <div id="about" className="scroll-to" />
      <About />
      <div id="projects" className="scroll-to" />
      <Projects />
      <div id="contact" className="scroll-to" />
      <Contact />
    </div>
  );
};

export default Main;
