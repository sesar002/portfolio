import React from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import "./sidebar.scss";

const Sidebar = ({ isOpen, setIsOpen }) => {
  let top = "-100%";
  let opacity = "0";

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    opacity = "100%";
    top = "0";
  } else {
    opacity = "0";
    top = "-100%";
  }

  return (
    <aside
      className="sidebar-cont"
      style={{ opacity: opacity, top: top }}
      onClick={toggle}
    >
      <div className="icon" onClick={toggle}>
        <FaTimes className="close-icon"></FaTimes>
      </div>
      <div className="sidebar-wrapper">
        <ul className="sidebar-menu">
          <Link
            className="sidbar-link"
            to="home"
            onClick={toggle}
            spy={true}
            smooth={true}
          >
            Home
          </Link>
          <Link
            className="sidbar-link"
            to="about"
            onClick={toggle}
            spy={true}
            smooth={true}
          >
            About
          </Link>
          <Link
            className="sidbar-link"
            to="projects"
            onClick={toggle}
            spy={true}
            smooth={true}
          >
            Projects
          </Link>
          <Link
            className="sidbar-link"
            to="contact"
            onClick={toggle}
            spy={true}
            smooth={true}
          >
            Contact
          </Link>
        </ul>
        <div className="btn-wrap">
          <a
            className="sidebar-route"
            href="https://github.com/sesar002"
            target="a_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
