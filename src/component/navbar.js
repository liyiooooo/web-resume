import React from "react";
import { Link } from "react-router-dom";
import "../pages/global.scss";
import "./navbar.scss";
import "animate.css";
import { AiFillHome } from "react-icons/ai";

function Navbar() {
  return (
    <>
      {/* <div className="all_bg"> */}
      <div className="navBottom">
        <div>
          <Link to={"/web-resume"} className="arrow_box" role="button">
            <AiFillHome className="up_arrow" />
          </Link>
        </div>

        <div></div>

        <nav className="navigate" id="navigate">
          <Link className="re_carousel_btn " to="/resume">
            Resume
          </Link>
          <Link className="port_carousel_btn " to="/portfolio">
            Portfolio
          </Link>
          <Link className="con_carousel_btn " to="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
