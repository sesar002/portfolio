import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import { FaArrowRight } from "react-icons/fa";
import "./home.scss";

const Home = () => {
  return (
    <div className="main-header">
      <Particles
        id="tsparticles"
        className="particles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
          },
          particles: {
            color: {
              value: "#1000ff",
              width: 5,
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1.5,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1200,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 8,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="move-up">
        <Fade direction="left" triggerOnce>
          <p className="header-top">
            Hi, my name is <span className="my-name">Luka Sesar.</span>
          </p>
          <p className="header-bottom">I'm a front-end web developer.</p>
        </Fade>
        <Fade direction="left" triggerOnce>
          <Link className="header-button" to="about" spy={true} smooth={true}>
            View more <FaArrowRight className="arrow" />
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
