import React from "react";
// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';
import "../pages/global.scss";
import "./nav.scss";
import "animate.css";
//import Resume from "../pages/resume";
//import Portfolio from "../pages/portfolio";
//import Contact from "../pages/contact";
// import { FaArrowCircleUp } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

function carousel() {
  return (
    <>
      {/* <div className="all_bg"> */}
      <div className="navBottom">
        <div>
          <Link to={"/"} className="arrow_box" role="button">
            <AiFillHome className="up_arrow" />
          </Link>
        </div>
        {/* <div>
          <Outlet />
        </div> */}

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
export default carousel;
