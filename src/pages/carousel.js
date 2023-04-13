import React from "react";

import { Link } from "react-router-dom";
// import Carousel from 'react-bootstrap/Carousel';
import "./global.scss";
import "./carousel.scss";
import "animate.css";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Contact from "./contact";
// import { FaArrowCircleUp } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

function carousel() {
  return (
    <>
      {/* <div className="all_bg"> */}

      <div>
        <Link to={"/"} className="arrow_box" role="button">
          <AiFillHome className="up_arrow" />
        </Link>
      </div>

      <div class="carousel">
        <ul class="scroll">
          <li class="scroll-item-outer">
            <div id="slide-1" class="scroll-item">
              <Resume />
            </div>
            {/* <Link to={"/carousel/resume"} id="slide-1" /> */}
          </li>
          <li class="scroll-item-outer">
            <div id="slide-2" class="scroll-item">
              <Portfolio />
            </div>
            {/* <Link to={"/carousel/portfolio"} id="slide-2" /> */}
          </li>
          <li class="scroll-item-outer">
            <div id="slide-3" class="scroll-item">
              <Contact />
            </div>
            {/* <Link to={"/carousel/contact"} id="slide-3" /> */}
          </li>
        </ul>
      </div>

      <nav className="navigate" id="navigate">
        {/* <Link to={"#slide-1"}/>
                    <Link to={"#slide-2"}/>
                    <Link to={"#slide-3"}/> */}
        <a className="re_carousel_btn " href="#slide-1">
          Resume
        </a>
        <a className="port_carousel_btn " href="#slide-2">
          Portfolio
        </a>
        <a className="con_carousel_btn " href="#slide-3">
          Contact
        </a>
      </nav>

      {/* </div> */}
    </>
  );
}
export default carousel;
