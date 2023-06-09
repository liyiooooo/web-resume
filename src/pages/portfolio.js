import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./portfolio.scss";
import "./global.scss";
import "animate.css";

function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.querySelector(".navBottom").style.display = "block";
  }, []);
  return (
    <>
      {/* <div className="all_bg"> */}
      {/* <div>
                <Link to={"/"} className="arrow_box" role="button">
                    <FaArrowCircleUp className="up_arrow"/>
                </Link>
            </div> */}

      <div className="port_content animate__animated animate__fadeIn">
        <div className="">
          <div className="four_dots_line ">
            <img
              src={require("../images/dot.png")}
              className="img-fluid"
              alt=""
            ></img>
            <h6>My Portfolio</h6>
          </div>
          <div className="port_pic ">
            <Link to={"/portfolio/portfolioWeb"} className="card_port col">
              <div className="card-body">
                <img
                  className="em_pic"
                  src={require("../images/em_logo.png")}
                  alt=""
                ></img>
              </div>
              <div className="card-title">
                <h4>Web Design </h4>
              </div>
            </Link>
            <Link to={"/portfolio/portfolioGraphic"} className="card_port col">
              <div className="card-body">
                <img
                  className="grapic_pic"
                  src={require("../images/grapic_logo.png")}
                  alt=""
                ></img>
              </div>
              <div className="card-title">
                <h4>Graphic Design </h4>
              </div>
            </Link>
            {/*<Link to={"/carousel/portfolio/Graphic"} className="card_port ">
                                <div className="port_box" >
                                    <div className="card-title">
                                        img
                                    </div>
                                    <div className="card-name">
                                        <p>Graphic Design </p>
                                    </div>
                                </div>
                            </Link>*/}
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
export default Portfolio;
