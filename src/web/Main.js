import React from "react";
import About from "./about/About";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import { useState } from "react";
import "./style.scss";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="main">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Main;
