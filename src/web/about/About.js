import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";
import { BsSpeedometer } from "react-icons/bs";
import { ImMagicWand } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <Fade direction="left" triggerOnce>
        <h1>ABOUT</h1>
        <div className="underline"></div>
      </Fade>
      <div className="about-cont">
        <Fade direction="right" triggerOnce>
          <div className="box-cont">
            <div className="box-out">
              <div className="box-in">
                <FaLaptop className="laptop" />
                <FaMobileAlt className="mobile" />
              </div>
            </div>
            <h2>Responsive</h2>
            <p>My apps are responsive and work on mobile and desktop.</p>
          </div>
          <div className="box-cont">
            <div className="box-out">
              <div className="box-in">
                <BsSpeedometer className="speedometer" />
              </div>
            </div>
            <h2>Fast</h2>
            <p>Fast loading and zero lag, only smooth sailing.</p>
          </div>
          <div className="box-cont">
            <div className="box-out">
              <div className="box-in">
                <ImMagicWand className="wand" />
              </div>
            </div>
            <h2>Animated</h2>
            <p>Many animations that make the app more interesting.</p>
          </div>
          <div className="box-cont">
            <div className="box-out">
              <div className="box-in">
                <BiCodeAlt className="code" />
              </div>
            </div>
            <h2>Code</h2>
            <p>Organised and understandable code.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
