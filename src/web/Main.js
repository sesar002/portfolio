import React from "react";
import Navbar from "./navbar/Navbar";
import "./style.scss";

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="main-header">
        <p>
          Hi, my name is <span className="my-name">Luka Sesar.</span>
        </p>
        <p>I'm a front-end web developer.</p>
      </div>
    </div>
  );
};

export default Main;
