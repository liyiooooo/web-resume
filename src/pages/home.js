import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./home.scss";
import "./global.scss";
import "animate.css";

function Home() {
  useEffect(() => {
    document.querySelector(".navBottom").style.display = "none";
  }, []);
  return (
    <>
      <div className="home_bg">
        <img
          className="home_bg_l animate__animated animate__fadeInBottomLeft"
          src={require("../images/bg_4.png")}
          alt=""
        ></img>
        <img
          className="home_bg_r animate__animated animate__fadeInTopRight"
          src={require("../images/bg_3.png")}
          alt=""
        ></img>
        <div className="animate_box animate__animated animate__bounceInDown">
          <Link className="home_10pic" role="button" to="/resume">
            <div className="pic10"></div>
            <img
              className="home_finger"
              src={require("../images/finger.png")}
              alt=""
            ></img>
            <p className="home_click">click me</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
