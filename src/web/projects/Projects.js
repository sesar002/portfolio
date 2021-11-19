import React from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { projects } from "./projectArray";
import "./projects.scss";

const Projects = () => {
  const [popUp, setPopUp] = useState("");

  const handlePopUp = (e, id) => {
    setPopUp(id);
  };
  const handleRemovePopUp = () => {
    setPopUp("");
  };

  return (
    <div className="projects">
      <Fade direction="left" triggerOnce>
        <h1>PROJECTS</h1>
        <div className="underline"></div>
      </Fade>
      <div className="project-cont">
        {projects.map((project) => {
          const { id, icon, name, ghPages, ghCode, techStack, about } = project;
          return (
            <div key={id}>
              <Fade direction="right" triggerOnce>
                <div className="project" onClick={(e) => handlePopUp(e, id)}>
                  {icon}
                  <h3>{name}</h3>
                  <span>VIEW DETAILS</span>
                </div>
              </Fade>
              {popUp === id ? (
                <div key={id + "app"} className="pop-up">
                  <span className="close" onClick={() => handleRemovePopUp()}>
                    &times;
                  </span>
                  <div className="pop-up-content">
                    {icon}
                    <h1>{name}</h1>
                    <div>
                      <a target="a_blank" href={ghPages}>
                        DEMO
                      </a>
                      <a target="a_blank" href={ghCode}>
                        CODE
                      </a>
                    </div>
                    <h3>
                      Tech stack: <span>{techStack}</span>
                    </h3>
                    <p>{about}</p>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
