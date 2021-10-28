import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import "./nav.scss";

const Navbar = ({ isOpen, setIsOpen }) => {
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-cont">
        <div className="mobile-icon" onClick={toggle}>
          <FaBars />
        </div>
        <ul className="nav-menu">
          <li>
            <Link className="nav-link" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="portfolio" spy={true} smooth={true}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-btn">
          <a
            className="nav-btn-link"
            href="https://github.com/sesar002"
            target="a_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
